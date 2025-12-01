import React, {useEffect,useState} from 'react';
import { useQuery } from '@tanstack/react-query';

import {Items} from 'Components/MainPages/DatabasePage/Items/Items.js'
import { FiltersWindow } from './Filters/FiltresWindow';
import {DefaultButton} from 'Components/Button.js';
import {buildQueryString} from './Utils.js'

import * as GlobalConstants from "Constants.js";
import * as FilterConstants from "./Filters/Constants.js"
import * as Constants from "./Constatns.js"

import "Styles/MainPages/DatabasePage/Items/DatabaseItems.css"
import "Styles/MainPages/DatabasePage/DatabasePage.css"
import "Styles/MainPages/DatabasePage/FiltersActivationButton.css"
import "Styles/MainPages/DatabasePage/FiltersItemsWrapper.css"
import "Styles/CenteredText.css"

export const DatabasePageContent = () => {

	// стейт для сохранения полученных с сервера данных о фильтрах (какие фильтры есть, какие в них есть опции)
	const [allFilters, setAllFilters] = useState([])
	// стейт для отображения/скрытия окна фильтров
	const [isFiltersVisible, setIsFiltersVisible] = useState(false)
	// стейт с текущими значениями фильтров
	const [filtersState, setFilterState] = useState({})

	const fetchItems = async ({signal}) => {

		const query = buildQueryString(filtersState);
		const url = `${GlobalConstants.base_server_url + GlobalConstants.post_all}?${query}`;
		const resp = await fetch(url, {
			method: GlobalConstants.http_methods.GET,
			headers: { "Content-Type": "application/json" },
			signal,
		});

		if (!resp.ok) throw new Error("Failed to fetch");
		return resp.json();
	};

	const {data, isLoading, error} = useQuery({
		queryKey: ["items", filtersState],
		queryFn: fetchItems,
	});

	useEffect(() => {
		if (data?.filters && allFilters.length === 0) {
			parseFiltersData(data.filters);
		}
	}, [data, allFilters.length]);


	// Парсим информацио о фильтрах с сервера
	const parseFiltersData = (filtersData) => {
		const allFilters = [];
		const filtersInitialState = {};

		filtersData.forEach((filter) => {
			const { name, values, type } = filter;
			allFilters.push({ name, values, type });

			if (type === FilterConstants.FilterType.multiCheckbox) {
				filtersInitialState[name] = [];
			} else if (type === FilterConstants.FilterType.range) {
				filtersInitialState[name] = { min: '', max: '' };
			}
		});
		setAllFilters(allFilters);
		setFilterState(filtersInitialState);
	}

	const onFilterStateChanged = (filterName) => (newState) => {
		setFilterState(prevState => ({
			...prevState,
			[filterName]: newState,
		}));
	};


	// Все еще загружаем контент
	if (isLoading) {
		return (
			<div className="database-page">
				<p className="centered-text">{Constants.loading}</p>
			</div>
		);
	}

	// Ошибка запроса
	if (error) {
		return (
			<div className="database-page">
				<p className="centered-text">Ошибка загрузки данных</p>
			</div>
		);
	}

	return (
		<div className="database-page">
			{/* Кнопка открытия фильтров */}
			<DefaultButton
				className="filter-activation-button"
				labelText="Filters"
				onClick={() => setIsFiltersVisible(prev => !prev)}
			/>

			{/* Блок фильтров и items */}
			<div className="filters-items-wrapper">
				{isFiltersVisible && (
				<FiltersWindow
					availableFilters={allFilters}
					filtersState={filtersState}
					onFilterStateChanged={onFilterStateChanged}
				/>
				)}

				<Items databaseState={data.data} />
			</div>
		</div>
	);
};
