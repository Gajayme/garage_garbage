import { ItemImageGallery } from "./ItemImageGallery.js";
import { ItemInfo } from "./ItemInfo.js";
import { ItemDescription } from "./ItemDescription.js";
import { DefaultButton } from "Components/Button.js";

import "Styles/MainPages/CatalogItemPage/ItemPageSmallScreen.css";
import "Styles/MainPages/CatalogItemPage/BuyItemButton.css";

/**
 * Раскладка страницы вещи для узких/высоких экранов.
 *
 * Сверху — данные о вещи, под ними галерея изображений, ниже — описание.
 *
 * @param {{ title: string, size: any, price: any, description: string }} itemData
 * @param {Array} images - массив изображений вещи
 * @param {Function} onImageClick - обработчик клика по изображению (открытие модалки)
 */
export const ItemPageSmallScreen = ({ itemData, images, onImageClick }) => {
	const { title, size, price, description } = itemData;

	return (
		<div className="item-page-small-screen">
			<ItemInfo title={title} size={size} price={price} />
			<ItemImageGallery images={images} onImageClick={onImageClick} />
			<ItemDescription description={description} />
			<DefaultButton className="buy-item-button" labelText="BUY" />
		</div>
	);
};
