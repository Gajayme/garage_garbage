
import React, {useState} from 'react';

import {OuterWindow} from "Components/Window/OuterWindow.js"
import {InnerWindow} from "Components/Window/InnerWindow.js"

import 'Styles/MainPages/CatalogPage/Filters/FilterButton.css'
import 'Styles/MainPages/CatalogPage/Filters/FilterWithButton.css'
import 'Styles/Window/OuterWindow.css'
import 'Styles/Window/InnerWindow.css'


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

	const innerWindow = <InnerWindow
			className="inner-window-filters">
		<FilterBuilder
			availableFilters={availableFilters}
			filtersState={filtersState}
			toggleFilterVisibility={toggleFilterButton}
			onFilterStateChanged={onFilterStateChanged}
			filtersVisibility={filtersActivityState}
		/>
		</InnerWindow>


	return (
		<div style={{width:'100%'}}>
			<OuterWindow
				className="outer-window-filters"
				innerWindow={innerWindow}>
			</OuterWindow>
		</div>
	)
}
