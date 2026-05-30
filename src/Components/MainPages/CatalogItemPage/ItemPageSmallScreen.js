import { ItemImageGallery } from "./ItemImageGallery.js";
import { ItemInfo } from "./ItemInfo.js";
import { ItemDescription } from "./ItemDescription.js";
import { BuyItemButton } from "./BuyItemButton.js";

import "Styles/MainPages/CatalogItemPage/ItemPageSmallScreen.css";

/**
 * Раскладка страницы вещи для узких/высоких экранов.
 *
 * Сверху — данные о вещи, под ними галерея изображений, ниже — описание.
 *
 * @param {{ title: string, size: any, price: any, description: string }} itemData
 * @param {Array} images - массив изображений вещи
 * @param {Function} onImageClick - обработчик клика по изображению (открытие модалки)
 * @param {string|null} whatsappLink - ссылка на WhatsApp для кнопки BUY
 */
export const ItemPageSmallScreen = ({ itemData, images, onImageClick, whatsappLink }) => {
	const { title, size, price, description } = itemData;

	return (
		<div className="item-page-small-screen">
			<ItemInfo title={title} size={size} price={price} />
			<ItemImageGallery images={images} onImageClick={onImageClick} />
			<ItemDescription description={description} />
			<BuyItemButton whatsappLink={whatsappLink} />
		</div>
	);
};
