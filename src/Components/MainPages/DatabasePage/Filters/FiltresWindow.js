
import React, {useState} from 'react';

import {OuterWindow} from "Components/Window/OuterWindow.js"
import {FilterWithButton} from './FilterWithButton.js';
import { CheckboxMultiFilter } from './SpecificFilters/CheckboxMultiFilter.js';
import { RangeFilter } from './SpecificFilters/RangeFilter.js';
import * as Constants from './Constants.js'

import 'Styles/MainPages/DatabasePage/Filters/FiltersWindow.css'
import 'Styles/MainPages/DatabasePage/Filters/FilterButton.css'
import 'Styles/MainPages/DatabasePage/Filters/FilterWithButton.css'

import arrowUp from 'Images/Filters/arrow_up.svg';
import arrowDown from 'Images/Filters/arrow_down.svg';
import rangeArrow from 'Images/Filters/price_range_arrow.svg';
import checkmark from 'Images/checkmark.svg';


// Компонет со всеми фильтрами
export const FiltersWindow = ({availableFilters}) => {

	// стейт активности фильтров
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

	const brandFilterValues = ["option_1", "option_2", "option_3"]

	// непосредственно фильтры
	const brandFilter = <CheckboxMultiFilter
							allValues = {brandFilterValues}
							checkedOptions={filtersState.BRAND}
							onChange={toggleMultipleCheckboxFilter(Constants.Brand)}
							checkmarkImg = {checkmark}
						/>

	let initialPriceRange = {min: undefined, max:undefined}

	const priceRangeFilter = <RangeFilter
						image = {rangeArrow}
						currentValues = {initialPriceRange}
					/>

	const filters = <div className="outer-window-filters">

		<FilterWithButton
			filter={brandFilter}
			labelText = {Constants.Brand}
			className = "filter-with-button"
			buttonClassName = "filter-button"
			iconClassName = "filter-arrow-icon"
			iconInactive = {arrowUp}
			iconActive = {arrowDown}
			onClick = {() => toggleFilterButton(Constants.Brand)}
			altImg={Constants.Brand}
			isActive = {filtersActivityState.BRAND}
		/>

		<FilterWithButton
			filter={priceRangeFilter}
			labelText = {Constants.Price}
			className = "filter-with-button"
			buttonClassName = "filter-button"
			iconClassName = "filter-arrow-icon"
			iconInactive = {arrowUp}
			iconActive = {arrowDown}
			onClick = {() => toggleFilterButton(Constants.Price)}
			altImg={Constants.Price}
			isActive = {filtersActivityState.PRICE}
		/>
	</div>

	return (
		<div>
			<OuterWindow innerWindow={filters}>
			</OuterWindow>
		</div>
	)
}
