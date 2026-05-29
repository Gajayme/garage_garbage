import { ItemImageGrid } from "./ItemImageGrid.js";
import { ItemInfo } from "./ItemInfo.js";
import { ItemDescription } from "./ItemDescription.js";
import { DefaultButton } from "Components/Button.js";

import "Styles/MainPages/CatalogItemPage/ItemPageBigScreen.css";
import "Styles/MainPages/CatalogItemPage/BuyItemButton.css";

/**
 * Раскладка страницы вещи для широких экранов.
 *
 * Слева — сетка изображений, справа — колонка с данными о вещи и описанием.
 *
 * @param {{ title: string, size: any, price: any, description: string }} itemData
 * @param {Array} images - массив изображений вещи
 * @param {Function} onImageClick - обработчик клика по изображению (открытие модалки)
 */
export const ItemPageBigScreen = ({ itemData, images, onImageClick }) => {
	const { title, size, price, description } = itemData;

	return (
		<div className="item-page-big-screen">
			<ItemImageGrid images={images} onImageClick={onImageClick} />

			<div className="item-page-big-screen__aside">
				<ItemInfo title={title} size={size} price={price} />
				<ItemDescription description={description} />
				<DefaultButton className="buy-item-button" labelText="BUY" />
			</div>
		</div>
	);
};
