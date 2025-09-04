
import * as Constants from 'Constants.js'

import "Styles/MainPages/DatabasePage/DatabaseItem.css"

import DefaultImg from "Images/tshirt_stub.svg"

/**
 * Компонент для отображения одной вещи с краткой информацией по ней.
 *
 * @param {string} img - Изображение вещи.
 * @param {string} name - Название вещи.
 * @param {string} price - Цена вещи
 * @param {string} adding_date_time - Дата добавления вещь в БД.
 * @param {Function} onClick - Функция-обработчик клика на элемент.
 */
export const Item = ({img, name, price, adding_date_time, onClick}) => {
    return (
        <div className={"database-item"} onClick={onClick}>
            <img src={img ? img : DefaultImg} alt={"item"}/>
            <p title={name}> <strong> {Constants.item_name}: </strong> {name}</p>
            <p title={price}> <strong> {Constants.price}: </strong> {price}</p>
            <p title={adding_date_time}> <strong> {Constants.adding_date_time}: </strong> {adding_date_time}</p>
        </div>
    )
}