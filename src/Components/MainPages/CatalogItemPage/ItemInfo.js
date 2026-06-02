import "Styles/MainPages/CatalogItemPage/ItemInfo.scss";

/**
 * Компонент с данными о вещи (имя, размер, цена) — без описания.
 *
 * @param {string} title - имя вещи
 * @param {string|number} size - размер
 * @param {string|number} price - цена
 * @param {string} [delimiter] - разделитель «ключ — значение»
 */
export const ItemInfo = ({ title, size, price, delimiter = ": " }) => {
	return (
		<div className="item-info">

			{/* Заголовок (имя вещи) */}
			<p className="item-info__title">
				{title}
			</p>

			{/* Размер */}
			<p className="item-info__row">
				size{delimiter}{String(size)}
			</p>

			{/* Цена */}
			<p className="item-info__row">
				price{delimiter}{String(price)}
			</p>
		</div>
	);
};
