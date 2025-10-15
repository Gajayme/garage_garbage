
import React, {useState} from 'react';

import {OuterWindow} from "Components/Window/OuterWindow.js"
import {ButtonWithIcon} from 'Components/ButtonWithIcon.js';

import 'Styles/MainPages/DatabasePage/Filters/FiltersWindow.css'
import 'Styles/MainPages/DatabasePage/Filters/FilterButton.css'

import * as Constants from './Constants.js'

import arrowUp from 'Images/Filters/arrow_up.svg';
import arrowDown from 'Images/Filters/arrow_down.svg';


export const FiltersWindow = () => {


	const filterOptions = [Constants.Brand, Constants.Size, Constants.Price];

	const initialFilterState = filterOptions.reduce((acc, key) => {
		acc[key] = false;
		return acc;
	}, {});

	const [filtersState, setFiltersState] = useState(initialFilterState);

	const toggleFilterButton = (filterName) => {
		setFiltersState(prev => ({
			...prev,
			[filterName]: !prev[filterName]
		}));
	};

	const filters = <div className="outer-window-filters">
		<ButtonWithIcon labelText = {Constants.Brand} className="filter-button" iconClassName="filter-arrow-icon" iconInactive={arrowUp} iconActive={arrowDown} onClick={() => toggleFilterButton(Constants.Brand)} altImg="Brand" isActive={filtersState.BRAND} ></ButtonWithIcon>
		<ButtonWithIcon labelText = {Constants.Size} className="filter-button" iconClassName="filter-arrow-icon" iconInactive={arrowUp} iconActive={arrowDown} onClick={() => toggleFilterButton(Constants.Size)} altImg="Size" isActive={filtersState.SIZE} ></ButtonWithIcon>
		<ButtonWithIcon labelText = {Constants.Price} className="filter-button" iconClassName="filter-arrow-icon" iconInactive={arrowUp} iconActive={arrowDown} onClick={() => toggleFilterButton(Constants.Price)} altImg="Price" isActive={filtersState.PRICE} ></ButtonWithIcon>
	</div>

	return (
		<div>
			<OuterWindow innerWindow={filters}>
			</OuterWindow>
		</div>
	)
}
