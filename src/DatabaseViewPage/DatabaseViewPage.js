
import React, {useEffect, useState} from 'react';
import {Item} from './Item';
import * as Constants from "../Common/Constants";

import "../Styles/DatabaseItems.css"


export const DatabaseViewPage = () => {

    // стейт для сохранения полученных с сервера объектов
    const [databaseState, setDatabaseState] = useState([])

    const parseServerData = (data) => {
        const newItems = data.map((item) => ({
            image: null, // TODO: переделать на нормальное значение
            itemName: item.itemName,
            price: item.price,
            adding_date_time: 0, // TODO: переделать на нормальное значение
        }));
        setDatabaseState((prevState) => [...prevState, ...newItems]);
    }

    useEffect(() => {
        fetch(Constants.get_items_url, {
            method: Constants.http_methods.GET,
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => parseServerData(data.data))
            .catch((error) => console.error('Ошибка:', error));

    }, [])

    return (
        <div className={"database-items"}>
            {databaseState.map((item, index) => (
                <Item key={index} img={item.image} name={item.itemName} price={item.price} adding_date_time={item.adding_date_time} />
            ))}
        </div>
    )
}
