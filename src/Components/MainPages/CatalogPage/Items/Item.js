
import { BorderedImage } from "Components/BorderedImage.js"

import "Styles/MainPages/CatalogPage/Items/CatalogItem.css"
import "Styles/TopAndLeftBorders.css"


/**
 * Компонент для отображения одной вещи с краткой информацией по ней.
 *
 * @param {Object} value - Объект товара (itemName, price, images и т.д.).
 * @param {Function} onClick - Функция-обработчик клика на элемент.
 */
export const Item = ({ value, onClick }) => {
	const imageSrc = value.images?.[0]?.image_url ?? null;
	const name = value.itemName;
	const price = value.price;

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
