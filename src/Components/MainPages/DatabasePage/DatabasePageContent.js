import React, {useEffect,useState, useCallback} from 'react';
import { useQuery } from '@tanstack/react-query';

import {Items} from 'Components/MainPages/DatabasePage/Items.js'
import { FiltersWindow } from './Filters/FiltresWindow';
import {DefaultButton} from 'Components/Button.js';
import * as Constants from "Constants.js";
import * as FilterConstatns from "./Filters/Constants.js"

import "Styles/MainPages/DatabasePage/DatabaseItems.css"
import "Styles/MainPages/DatabasePage/DatabasePage.css"
import "Styles/MainPages/DatabasePage/FiltersActivationButton.css"
import "Styles/MainPages/DatabasePage/FiltersItemsWrapper.css"

export const DatabasePageContent = () => {

	// стейт для сохранения полученных с сервера данных
	const [databaseState, setDatabaseState] = useState([])
	// стейт для сохранения полученных с сервера данных о фильтрах (какие фильтры есть, какие в них есть опции)
	const [allFilters, setAllFilters] = useState([])
	// стейт для отображения/скрытия окна фильтров
	const [isFiltersVisible, setIsFiltersVisible] = useState([])
	// стейт с текущими значениями фильтров
	const [filtersState, setFilterState] = useState([])

	const initialFetchItems = async () => {
		const resp = await fetch(Constants.base_server_url + Constants.post_all, {
				method: Constants.http_methods.GET,
				headers: {
					'Content-Type': 'application/json',
				},
			});
		if (!resp.ok) throw new Error("Failed to fetch");
		return resp.json();
	};


	const { data, isLoading, error } = useQuery({
		queryKey: ["items"],
		queryFn: initialFetchItems,
		enabled: !databaseState.length,
	});


	useEffect(() => {
		if (allFilters.length === 0 && data) {
			console.log("parsingfilters data 1", data)
			parseFiltersData(data.filters)
		}
	}, [data, allFilters.length]);


	// Парсим объекты для отображения, которые пришли с сервера
	const parseItemsData = (itemsData) => {
		const newItems = itemsData.map((item) => ({
			id: item.id, // TODO: переделать на нормальное значение
			image:  Array.isArray(item.images) && item.images.length && item.images[0].image_url,
			itemName: item.itemName,
			price: item.price,
			adding_date_time: 0, // TODO: переделать на нормальное значение
		}));
		setDatabaseState((prevState) => [...prevState, ...newItems]);
	}

	// Парсим информацио о фильтрах с сервера
	const parseFiltersData = (filtersData) => {
		const allFilters = [];
		const filtersInitialState = {};

		filtersData.forEach((filter) => {
			const { name, values, type } = filter;
			allFilters.push({ name, values, type });

			if (type === FilterConstatns.FilterType.multiCheckbox) {
				filtersInitialState[name] = [];
			} else if (type === FilterConstatns.FilterType.range) {
				filtersInitialState[name] = { min: '', max: '' };
			}
		});
		setAllFilters(allFilters);
		setFilterState(filtersInitialState);
	}

	const parseServerData = useCallback((data) => {
		parseItemsData(data.data)
		parseFiltersData(data.filters)
	}, []);



	// Запрос к серверу
	// useEffect(() => {
	// 	if (!databaseState.length) {
	// 		fetch(Constants.base_server_url + Constants.post_all, {
	// 			method: Constants.http_methods.GET,
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 		})
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			parseServerData(data);
	// 			setIsLoading(false);
	// 		})
	// 		.catch((error) => {
	// 			console.error('Ошибка:', error);
	// 			setIsLoading(false); // даже при ошибке снимаем isLoading
	// 		});
	// 	}
	// }, [databaseState.length, parseServerData]);


	const onFilterStateChanged = (filterName) => (newState) => {
		setFilterState(prevState => ({
			...prevState,
			[filterName]: newState,
		}));
	};

	const renderContent = () => {
		if (isLoading) {
			return <p>Loading...</p>; // или null, или спиннер
		}
		if (data.data.length === 0) {
			return <p>No uploaded items</p>;
		}
		return (
			<div>
				<DefaultButton className={"filter-activation-button"}
					labelText={"Filters"}
					onClick={() => setIsFiltersVisible((prev) => !prev)}>
				</DefaultButton>

				<div className="filters-items-wrapper">

					{isFiltersVisible && <FiltersWindow
						availableFilters={allFilters}
						filtersState={filtersState}
						onFilterStateChanged={onFilterStateChanged}
					/>}

					<Items databaseState={data.data}/>
				</div>
			</div>
		)
	}

	return (
		<div className="database-page">
			{renderContent()}
		</div>
	)
}
