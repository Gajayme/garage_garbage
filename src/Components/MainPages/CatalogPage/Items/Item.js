
import { BorderedImage } from "Components/BorderedImage.js"

import "Styles/MainPages/CatalogPage/Items/CatalogItem.css"
import "Styles/TopAndLeftBorders.css"


/**
 * Компонент для отображения одной вещи с краткой информацией по ней.
 *
 * @param {string} imageSrc - Изображение вещи.
 * @param {string} name - Название вещи.
 * @param {string} price - Цена вещи
 * @param {string} adding_date_time - Дата добавления вещь в БД.
 * @param {Function} onClick - Функция-обработчик клика на элемент.
 */
export const Item = ({imageSrc, name, price, onClick}) => {
	return (
		<div className={"catalog-item"} onClick={onClick}>
			<BorderedImage
				className="catalog-item-image"
				imageSrc = {imageSrc}
				alt={"item"}
			/>

			<p title={name}> {name}</p>
			<p title={price}> {price}</p>
		</div>
	)
}
