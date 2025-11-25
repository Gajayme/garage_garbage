
import React, {useState} from 'react';

import {OuterWindow} from "Components/Window/OuterWindow.js"

import 'Styles/MainPages/DatabasePage/Filters/FiltersWindow.css'
import 'Styles/MainPages/DatabasePage/Filters/FilterButton.css'
import 'Styles/MainPages/DatabasePage/Filters/FilterWithButton.css'

import { FilterBuilder } from './FiltersBuilder.js';


// Компонет со всеми фильтрами
export const FiltersWindow = ({availableFilters, filtersState, onFilterStateChanged}) => {

	// начальный стейт активности фильтров
	const initialFiltersActivityState =
	availableFilters.reduce((acc, filterData) => {
		acc[filterData.name] = false;
		return acc;
	}, {});

	// стейт активности фильтров
	const [filtersActivityState, setfiltersActivityState] = useState(initialFiltersActivityState);

	// переключение активности фильтров
	const toggleFilterButton = (filterName) => {
		setfiltersActivityState(prev => ({
			...prev,
			[filterName]: !prev[filterName]
		}));
	};

	const filters = <FilterBuilder
		availableFilters={availableFilters}
		filtersState={filtersState}
		toggleFilterVisibility={toggleFilterButton}
		onFilterStateChanged={onFilterStateChanged}
		filtersVisibility={filtersActivityState}
	/>

	return (
		<div>
			<OuterWindow innerWindow={filters}>
			</OuterWindow>
		</div>
	)
}
