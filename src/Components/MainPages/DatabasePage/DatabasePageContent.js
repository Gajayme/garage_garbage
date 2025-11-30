import React, {useEffect,useState, useCallback} from 'react';
import { useQuery } from '@tanstack/react-query';

import {Items} from 'Components/MainPages/DatabasePage/Items/Items.js'
import { FiltersWindow } from './Filters/FiltresWindow';
import {DefaultButton} from 'Components/Button.js';
import {buildQueryString} from './Utils.js'

import * as GlobalConstants from "Constants.js";
import * as FilterConstatns from "./Filters/Constants.js"
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
	const [isFiltersVisible, setIsFiltersVisible] = useState([])
	// стейт с текущими значениями фильтров
	const [filtersState, setFilterState] = useState([])

	const fetchItems = async () => {
		console.log("Filters:", filtersState)
		const query = buildQueryString(filtersState);
		console.log("query", query)
		const url = `${GlobalConstants.base_server_url + GlobalConstants.post_all}?${query}`;
		const resp = await fetch(url, {
			method: GlobalConstants.http_methods.GET,
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!resp.ok) throw new Error("Failed to fetch");
		return resp.json();
	};

	const { data, isLoading, error } = useQuery({
		queryKey: ["items", filtersState],
		queryFn: fetchItems,
		// enabled: !allFilters.length,
	});

	useEffect(() => {
		if (allFilters.length === 0 && data) {
			parseFiltersData(data.filters)
		}
	}, [data, allFilters.length]);


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

	const onFilterStateChanged = (filterName) => (newState) => {
		setFilterState(prevState => ({
			...prevState,
			[filterName]: newState,
		}));
	};

	const renderContent = () => {
		if (isLoading) {
			return <p className='centered-text'>{Constants.loading}</p>; // Загрузка
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
