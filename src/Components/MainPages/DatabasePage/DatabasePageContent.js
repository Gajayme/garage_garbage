import React, {useEffect, useState} from 'react';

import {Items} from 'Components/MainPages/DatabasePage/Items.js'
import {DefaultButton} from 'Components/Button.js';
import * as Constants from "Constants";

import "Styles/MainPages/DatabasePage/DatabaseItems.css"
import "Styles/MainPages/DatabasePage/DatabasePage.css"
import "Styles/MainPages/DatabasePage/FiltersActivationButton.css"

import DefaultImg from "Images/сложенная-пустая-одежда-на-белом-фоне-329728970.webp"

import {click} from "@testing-library/user-event/dist/click";

export const DatabasePageContent = () => {

	const onFilterClicked = () => {
	}

	    //
    // // стейт для сохранения полученных с сервера объектов
    // const [databaseState, setDatabaseState] = useState([])
    // const [chosenItem, setChosenItem] = useState(null)
    //
    // const parseServerData = (data) => {
    //     console.log(data)
    //     const newItems = data.map((item) => ({
    //         id: item.id, // TODO: переделать на нормальное значение
    //         image:  Array.isArray(item.images) && item.images.length && item.images[0].image_url, // TODO: переделать на нормальное значение
    //         itemName: item.itemName,
    //         price: item.price,
    //         adding_date_time: 0, // TODO: переделать на нормальное значение
    //     }));
    //     setDatabaseState((prevState) => [...prevState, ...newItems]);
    // }
    //


    return (
        <div className="database-page">
            <DefaultButton className={"filter-activation-button"} labelText={"Filters"} onClick={onFilterClicked}></DefaultButton>
			<Items/>
        </div>
    )


    // // Запрос к серверу
    // useEffect(() => {
    //     if (!databaseState.length) {
    //         fetch(Constants.base_server_url + Constants.post_all, {
    //             method: Constants.http_methods.GET,
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         })
    //             .then((response) => response.json())
    //             .then((data) => parseServerData(data.data))
    //             .catch((error) => console.error('Ошибка:', error));
    //     }
    // }, [databaseState.length]);
    //
    // useEffect(() => {
    //
    //     // Функция для обработки клика вне item
    //     const handleOutsideClick = (event) => {
    //         // Проверяем, был ли клик внутри модального окна
    //         if (chosenItem && !event.target.closest(".modal-overlay") && !event.target.closest(".database-item")) {
    //             setChosenItem(null);
    //         }
    //     };
    //
    //     document.addEventListener("click", handleOutsideClick);
    //     return () => {
    //         document.removeEventListener("click", handleOutsideClick);
    //     };
    // }, [chosenItem]);
    //
    // const handleItemClick = (item) => {
    //     if (chosenItem) {
    //         setChosenItem(null);
    //     } else {
    //         setChosenItem(item);
    //     }
    // }
    //
    // return (
    //     <div>
    //
    //         {chosenItem && (
    //             <ModalWindow
    //                 className={"modal-overlay"}
    //                 itemId={chosenItem.id}/>
    //         )}
    //
    //         <div className={"database-items"}>
    //             {databaseState.map((item) => (
    //                 <Item
    //                     key={item.id}
    //                     img={item.image}
    //                     name={item.itemName}
    //                     price={item.price}
    //                     adding_date_time={item.adding_date_time}
    //                     onClick={() => handleItemClick(item)
    //                     }
    //                 />
    //             ))}
    //         </div>
    //     </div>
    // )
}
