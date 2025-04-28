
import * as Constants from '../Constants.js'

import "../Styles/DatabaseItem.css"
import "../Styles/Bordered.css"
import DefaultImg from "../Imgs/tshirt_stub.svg"

/**
 * Компонент для отображения одной вещи с краткой информацией по ней.
 *
 * Props:
 * - img (image): Изображение (фото вещи).
 * - name (string): Название вещи.
 * - price (string): цена вещи
 * - adding_date_time (string): Дата добавления вещь в БД.
 * - onClick (function): Функция-обработчик клика на элемент.
 */
export const Item = ({img, name, price, adding_date_time, onClick}) => {
    return (
        <div className={"bordered-round-2 database-item"} onClick={onClick}>
            <img src={img ? img : DefaultImg} alt={"item"}/>
            <p title={name}> <strong> {Constants.item_name}: </strong> {name}</p>
            <p title={price}> <strong> {Constants.price}: </strong> {price}</p>
            <p title={adding_date_time}> <strong> {Constants.adding_date_time}: </strong> {adding_date_time}</p>
        </div>
    )
}