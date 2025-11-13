
import React, {useState} from 'react';

import {OuterWindow} from "Components/Window/OuterWindow.js"
import * as Constants from './Constants.js'

import 'Styles/MainPages/DatabasePage/Filters/FiltersWindow.css'
import 'Styles/MainPages/DatabasePage/Filters/FilterButton.css'
import 'Styles/MainPages/DatabasePage/Filters/FilterWithButton.css'

import { FilterBuilder } from './FiltersBuilder.js';


// Компонет со всеми фильтрами
export const FiltersWindow = ({availableFilters}) => {

	// начальный стейт активности фильтров
	const initialFiltersActivityState =
	availableFilters.reduce((acc, filterData) => {
		acc[filterData.name] = false;
		return acc;
	}, {});

	const [filtersActivityState, setfiltersActivityState] = useState(initialFiltersActivityState);

	// переключение активности фильтров
	const toggleFilterButton = (filterName) => {
		setfiltersActivityState(prev => ({
			...prev,
			[filterName]: !prev[filterName]
		}));
	};

	// начальный стейт со значениями фильтров
	const initialFiltersState = availableFilters.reduce((acc, filterData) => {
		const key = filterData.name
		if (filterData.type === Constants.FilterType.multiCheckbox) {
			acc[key] = [];
		} else if (filterData.type === Constants.FilterType.range)
			acc[key] = {
				min: undefined,
				max:undefined
			}
		return acc;
	}, {});


	const [filtersState, setfilterState] = useState(initialFiltersState)

	// изменение значений чекбокс
	const toggleMultipleCheckboxFilter = (filterName) => {
		return (newVal) => {
			setfilterState(prevState => {
				const currentList = prevState[filterName] || [];
				const updatedList = currentList.includes(newVal)
					? currentList.filter(item => item !== newVal) // удалить выбок
					: [...currentList, newVal];  // добавить
				return {...prevState, [filterName]: updatedList};
			})
		}
	}


	const filters = <FilterBuilder
		availableFilters={availableFilters}
		filtersState={filtersState}
		toggleCheckboxFilter={toggleMultipleCheckboxFilter}
		toggleFilterVisibility={toggleFilterButton}
		filtersVisibility={filtersActivityState}
	/>

	return (
		<div>
			<OuterWindow innerWindow={filters}>
			</OuterWindow>
		</div>
	)
}
