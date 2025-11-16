import React, {useEffect, useState, useCallback} from 'react';

import {Items} from 'Components/MainPages/DatabasePage/Items.js'
import { FiltersWindow } from './Filters/FiltresWindow';
import {DefaultButton} from 'Components/Button.js';
import * as Constants from "Constants";

import "Styles/MainPages/DatabasePage/DatabaseItems.css"
import "Styles/MainPages/DatabasePage/DatabasePage.css"
import "Styles/MainPages/DatabasePage/FiltersActivationButton.css"
import "Styles/MainPages/DatabasePage/FiltersItemsWrapper.css"

export const DatabasePageContent = () => {

	// стейт для сохранения полученных с сервера 34
	const [databaseState, setDatabaseState] = useState([])
	// стейт для сохранения полученных с сервера данных о фитртах (какие фильтры есть, какие в них есть опции)
	const [filtersState, setFiltersState] = useState([])
	// стейт для отображения/скрытия окна фильтров
	const [isFiltersVisible, setIsFiltersVisible] = useState([])
	// происходит ли первичная загрузка вещей с бека
	const [isLoading, setIsLoading] = useState(true);

	const parseItemsData = (itemsData) => {
		const newItems = itemsData.map((item) => ({
			id: item.id, // TODO: переделать на нормальное значение
			image:  Array.isArray(item.images) && item.images.length && item.images[0].image_url, // TODO: переделать на нормальное значение
			itemName: item.itemName,
			price: item.price,
			adding_date_time: 0, // TODO: переделать на нормальное значение
		}));
		setDatabaseState((prevState) => [...prevState, ...newItems]);
	}

	const parseFiltersData = (filtersData) => {
		const newFilters = filtersData.map((filter) => (
			{
			name: filter.name,
			values: filter.values,
			type: filter.type,
		}));
		setFiltersState((prevState) => [...prevState, ...newFilters]);
	}

	const parseServerData = useCallback((data) => {
		parseItemsData(data.data)
		parseFiltersData(data.filters)
	}, []);


	// Запрос к серверу
	useEffect(() => {
		if (!databaseState.length) {
			fetch(Constants.base_server_url + Constants.post_all, {
				method: Constants.http_methods.GET,
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then((response) => response.json())
			.then((data) => {
				parseServerData(data);
				setIsLoading(false); // 🔹 Фикс: загрузка завершена
			})
			.catch((error) => {
				console.error('Ошибка:', error);
				setIsLoading(false); // даже при ошибке снимаем isLoading
			});
		}
	}, [databaseState.length, parseServerData]);



	const renderContent = () => {
		if (isLoading) {
			return <p>Loading...</p>; // или null, или спиннер
		}
		if (databaseState.length === 0) {
			return <p>No uploaded items</p>;
		}
		return (
			<div>
				<DefaultButton className={"filter-activation-button"}
					labelText={"Filters"}
					onClick={() => setIsFiltersVisible((prev) => !prev)}>
				</DefaultButton>

				<div className="filters-items-wrapper">
					{isFiltersVisible && <FiltersWindow availableFilters={filtersState}/>}
					<Items databaseState={databaseState}/>
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
