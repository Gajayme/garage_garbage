import React, {useEffect, useState} from 'react';

import {Items} from 'Components/MainPages/DatabasePage/Items.js'
import {DefaultButton} from 'Components/Button.js';
import * as Constants from "Constants";

import "Styles/MainPages/DatabasePage/DatabaseItems.css"
import "Styles/MainPages/DatabasePage/DatabasePage.css"
import "Styles/MainPages/DatabasePage/FiltersActivationButton.css"


export const DatabasePageContent = () => {

	const onFilterClicked = () => {

	}

    // стейт для сохранения полученных с сервера объектов
    const [databaseState, setDatabaseState] = useState([])

    const parseServerData = (data) => {
        console.log(data)
        const newItems = data.map((item) => ({
            id: item.id, // TODO: переделать на нормальное значение
            image:  Array.isArray(item.images) && item.images.length && item.images[0].image_url, // TODO: переделать на нормальное значение
            itemName: item.itemName,
            price: item.price,
            adding_date_time: 0, // TODO: переделать на нормальное значение
        }));
        setDatabaseState((prevState) => [...prevState, ...newItems]);
    }

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
                .then((data) => parseServerData(data.data))
                .catch((error) => console.error('Ошибка:', error));

			}
    }, [databaseState.length]);


    return (
        <div className="database-page">
            <DefaultButton className={"filter-activation-button"} labelText={"Filters"} onClick={onFilterClicked}></DefaultButton>
			<Items databaseState/>
        </div>
    )
}
