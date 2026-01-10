
import "Styles/MainPages/CatalogPage/Items/CatalogItem.css"
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
		<div className={"catalog-item"} onClick={onClick}>
			<div className="catalog-image-container bordered-image-container" >
				<img className={"catalog-item-image"} src={img ? img : DefaultImg} alt={"item"}/>
			</div>
			<p title={name}> {name}</p>
			<p title={price}> {price}</p>
		</div>
	)
}
