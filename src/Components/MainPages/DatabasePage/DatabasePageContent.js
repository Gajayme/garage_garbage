import React, { useEffect,useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Items } from 'Components/MainPages/DatabasePage/Items/Items.js'

import { useLocation, useNavigate } from "react-router-dom";

import { FiltersWindow } from './Filters/FiltresWindow';
import { DefaultButton } from 'Components/Button.js';
import { buildQueryString, parseFiltersFromUrl } from './Utils.js'

import * as GlobalConstants from "Constants.js";
import * as FilterConstants from "./Filters/Constants.js"
import * as Constants from "./Constatns.js"

import "Styles/MainPages/DatabasePage/Items/DatabaseItems.css"
import "Styles/MainPages/DatabasePage/DatabasePage.css"
import "Styles/MainPages/DatabasePage/FiltersActivationButton.css"
import "Styles/MainPages/DatabasePage/FiltersItemsWrapper.css"
import "Styles/CenteredText.css"

export const DatabasePageContent = () => {

	const navigate = useNavigate();

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




	const location = useLocation();

	useEffect(() => {
		// Ждём данные с бэка
		if (!data?.filters) return;

		// Инициализируем фильтры только один раз
		if (allFilters.length !== 0) return;

		const filters = data.filters;
		// 1. сохраняем список всех фильтров
		setAllFilters(filters);

		// 2. создаём дефолтное состояние
		const defaultState = {};
		filters.forEach((f) => {
			if (f.type === FilterConstants.FilterType.multiCheckbox) {
				defaultState[f.name] = [];
			} else if (f.type === FilterConstants.FilterType.range) {
				defaultState[f.name] = { min: "", max: "" };
			}
		});

		// 3. читаем фильтры из URL
		const params = new URLSearchParams(location.search);
		const restoredState = parseFiltersFromUrl(params, filters);

		// 4. комбинируем дефолты + URL
		const finalState = {
			...defaultState,
			...restoredState,
		};

		setFilterState(finalState);

	}, [data, location.search, allFilters.length]);

	// Модификация ссылки (при выборе фильтров)
	useEffect(() => {
		// 1. Фильтры с бэка ещё не пришли → нельзя менять URL
		if (!allFilters.length) return;

		// 2. filtersState ещё пустой → нельзя менять URL
		if (!Object.keys(filtersState).length) return;

		// 3. filtersState совпадает с URL → тоже ничего не делаем
		const urlParams = new URLSearchParams(location.search);
		const built = buildQueryString(filtersState);
		if (urlParams.toString() === built) return;

		// 4. Теперь можно обновлять URL
		navigate(`?${built}`, { replace: true });
	}, [navigate, filtersState, allFilters.length, location.search]);


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
