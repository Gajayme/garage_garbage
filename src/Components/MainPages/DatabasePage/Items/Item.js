
import "Styles/MainPages/DatabasePage/Items/DatabaseItem.css"
import "Styles/BorderedImageContainer.css"

import DefaultImg from "Images/default.jpg"

/**
 * Компонент для отображения одной вещи с краткой информацией по ней.
 *
 * @param {string} img - Изображение вещи.
 * @param {string} name - Название вещи.
 * @param {string} price - Цена вещи
 * @param {string} adding_date_time - Дата добавления вещь в БД.
 * @param {Function} onClick - Функция-обработчик клика на элемент.
 */
export const Item = ({img, name, price, onClick}) => {
    return (
        <div className={"database-item"} onClick={onClick}>
			<div className="database-image-container bordered-image-container" >
            	<img className={"database-item-image"} src={img ? img : DefaultImg} alt={"item"}/>
			</div>
            <p title={name}> {name}</p>
            <p title={price}> {price}</p>
        </div>
    )
}
