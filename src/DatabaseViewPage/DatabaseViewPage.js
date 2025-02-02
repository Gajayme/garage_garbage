
import React, {useEffect, useState} from 'react';
import {Item} from './Item';
import {ModalWindow} from "./ModalWindow";
import * as Constants from "../Common/Constants";

import "../Styles/DatabaseItems.css"
import "../Styles/Bordered.css"


export const DatabaseViewPage = () => {

    // стейт для сохранения полученных с сервера объектов
    const [databaseState, setDatabaseState] = useState([])
    const [chosenItem, setChosenItem] = useState(null)

    const parseServerData = (data) => {
        const newItems = data.map((item) => ({
            id: item.id, // TODO: переделать на нормальное значение
            image: null, // TODO: переделать на нормальное значение
            itemName: item.itemName,
            price: item.price,
            adding_date_time: 0, // TODO: переделать на нормальное значение
        }));
        setDatabaseState((prevState) => [...prevState, ...newItems]);
    }

    // Запрос к серверу
    useEffect(() => {
        if (!databaseState.length) {
            fetch(Constants.get_items_url, {
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

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const handleItemClick = (item) => {
        if (chosenItem) {
            setChosenItem(null);
        } else {
            setChosenItem(item);
        }
    }

    // Функция для обработки клика вне item
    const handleOutsideClick = (event) => {
        if (!event.target.closest(".database-item")) {
            setChosenItem(null);
        }
    };

    return (
        <div>

            {chosenItem && (
                <ModalWindow
                    className={"bordered-round-2 modal-overlay"}
                    itemId={chosenItem.id}/>
            )}

            <div className={"database-items"}>
                {databaseState.map((item) => (
                    <Item
                        key={item.id}
                        img={item.image}
                        name={item.itemName}
                        price={item.price}
                        adding_date_time={item.adding_date_time}
                        onClick={() => handleItemClick(item)
                    }
                    />
                ))}
            </div>
        </div>
    )
}
