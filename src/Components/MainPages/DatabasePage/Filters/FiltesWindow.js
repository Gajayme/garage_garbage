
import React, {useState} from 'react';

import {OuterWindow} from "Components/Window/OuterWindow.js"
import {FilterWithButton} from './FilterWithButton.js';
import { CheckboxMultiFilter } from './CheckboxMultiFilter.js';
import * as Constants from './Constants.js'

import 'Styles/MainPages/DatabasePage/Filters/FiltersWindow.css'
import 'Styles/MainPages/DatabasePage/Filters/FilterButton.css'
import 'Styles/MainPages/DatabasePage/Filters/FilterWithButton.css'

import arrowUp from 'Images/Filters/arrow_up.svg';
import arrowDown from 'Images/Filters/arrow_down.svg';
import checkmark from 'Images/checkmark.svg';


export const FiltersWindow = () => {

	// TODO все фильтры нужно получать с бэка
	const filterOptions = [Constants.Brand, Constants.Size, Constants.Price];


	// АКТИВНОСТЬ ФИЛЬТРОВ
	const initialFiltersActivityState = filterOptions.reduce((acc, key) => {
		acc[key] = false;
		return acc;
	}, {});

	const [filtersActivityState, setfiltersActivityState] = useState(initialFiltersActivityState);

	const toggleFilterButton = (filterName) => {

		setfiltersActivityState(prev => ({
			...prev,
			[filterName]: !prev[filterName]
		}));
	};


	// ФИЛЬТРЫ
	// TODO все значения тоже получаем с бэка
	const initialFiltersState = filterOptions.reduce((acc, key) => {
		acc[key] = [];
		return acc;
	}, {});

	const [filtersState, setfilterState] = useState(initialFiltersState)

	const toggleMultipleCheckboxFilter = (filterName) => {
		return (newVal) => {
			setfilterState(prevState => {
				const currentList = prevState[filterName] || [];
				const updatedList = currentList.includes(newVal)
					? currentList.filter(item => item !== newVal) // удалить
					: [...currentList, newVal];  // добавить
				return {...prevState, [filterName]: updatedList};
			})
		}
	}

	const brandFilterValues = ["option_1", "option_2", "option_3"]

	const brandCheckbox = <CheckboxMultiFilter
							allValues = {brandFilterValues}
							checkedOptions={filtersState.BRAND}
							onChange={toggleMultipleCheckboxFilter(Constants.Brand)}
							checkmarkImg = {checkmark}
						/>


	const filters = <div className="outer-window-filters">


		<FilterWithButton
			filter={brandCheckbox}
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


		{/* <ButtonWithIcon labelText = {Constants.Brand} className="filter-button" iconClassName="filter-arrow-icon" iconInactive={arrowUp} iconActive={arrowDown} onClick={() => toggleFilterButton(Constants.Brand)} altImg={Constants.Brand} isActive={filtersActivityState.BRAND} ></ButtonWithIcon>
		<ButtonWithIcon labelText = {Constants.Size} className="filter-button" iconClassName="filter-arrow-icon" iconInactive={arrowUp} iconActive={arrowDown} onClick={() => toggleFilterButton(Constants.Size)} altImg={Constants.Size} isActive={filtersActivityState.SIZE} ></ButtonWithIcon>
		<ButtonWithIcon labelText = {Constants.Price} className="filter-button" iconClassName="filter-arrow-icon" iconInactive={arrowUp} iconActive={arrowDown} onClick={() => toggleFilterButton(Constants.Price)} altImg={Constants.Price} isActive={filtersActivityState.PRICE} ></ButtonWithIcon> */}

	</div>

	return (
		<div>
			<OuterWindow innerWindow={filters}>
			</OuterWindow>
		</div>
	)
}
