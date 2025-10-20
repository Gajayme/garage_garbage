
import React, {useState} from 'react';

import {OuterWindow} from "Components/Window/OuterWindow.js"
import {FilterWrapper} from './FilterWrapper.js';
import { CheckboxMultiFilter } from './CheckboxMultiFilter.js';

import 'Styles/MainPages/DatabasePage/Filters/FiltersWindow.css'
import 'Styles/MainPages/DatabasePage/Filters/FilterButton.css'
import 'Styles/MainPages/DatabasePage/Filters/FilterWrapper.css'

import * as Constants from './Constants.js'

import arrowUp from 'Images/Filters/arrow_up.svg';
import arrowDown from 'Images/Filters/arrow_down.svg';


export const FiltersWindow = () => {

	// TODO все фильтры нужно получать с бэка
	const filterOptions = [Constants.Brand, Constants.Size, Constants.Price];

	const initialFilterState = filterOptions.reduce((acc, key) => {
		acc[key] = false;
		return acc;
	}, {});

	const [filtersState, setFiltersState] = useState(initialFilterState);

	// TODO все фильтры нужно получать с бэка
	const toggleFilterButton = (filterName) => {

		setFiltersState(prev => ({
			...prev,
			[filterName]: !prev[filterName]
		}));
	};

	// BRAND FILTER
	const brandFilterOptions = ["option_1", "option_2", "option3"]

	const brandCheckbox = <CheckboxMultiFilter allOptions = {brandFilterOptions} />


	const filters = <div className="outer-window-filters">


		<FilterWrapper
			filter={brandCheckbox}
			labelText = {Constants.Brand}
			className = "filter-wrapper"
			buttonClassName = "filter-button"
			iconClassName = "filter-arrow-icon"
			iconInactive = {arrowUp}
			iconActive = {arrowDown}
			onClick = {() => toggleFilterButton(Constants.Brand)} altImg={Constants.Brand}
			isActive = {filtersState.BRAND}
		/>


		{/* <ButtonWithIcon labelText = {Constants.Brand} className="filter-button" iconClassName="filter-arrow-icon" iconInactive={arrowUp} iconActive={arrowDown} onClick={() => toggleFilterButton(Constants.Brand)} altImg={Constants.Brand} isActive={filtersState.BRAND} ></ButtonWithIcon>
		<ButtonWithIcon labelText = {Constants.Size} className="filter-button" iconClassName="filter-arrow-icon" iconInactive={arrowUp} iconActive={arrowDown} onClick={() => toggleFilterButton(Constants.Size)} altImg={Constants.Size} isActive={filtersState.SIZE} ></ButtonWithIcon>
		<ButtonWithIcon labelText = {Constants.Price} className="filter-button" iconClassName="filter-arrow-icon" iconInactive={arrowUp} iconActive={arrowDown} onClick={() => toggleFilterButton(Constants.Price)} altImg={Constants.Price} isActive={filtersState.PRICE} ></ButtonWithIcon> */}

	</div>

	return (
		<div>
			<OuterWindow innerWindow={filters}>
			</OuterWindow>
		</div>
	)
}
