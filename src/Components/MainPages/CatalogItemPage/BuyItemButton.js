import "Styles/MainPages/CatalogItemPage/BuyItemButton.css";

/**
 * Кнопка BUY: ссылка, открывающая чат в WhatsApp в новой вкладке.
 *
 * Пока ссылка не загружена, кнопка отображается в неактивном состоянии.
 *
 * @param {{ whatsappLink: string|null }} props
 */
export const BuyItemButton = ({ whatsappLink }) => {
	// Пока ссылка не загружена — рендерим неактивную кнопку (у <a> без href нет
	// доступности с клавиатуры). Когда ссылка есть — настоящая ссылка.
	if (!whatsappLink) {
		return (
			<button className="buy-item-button" type="button" disabled>
				BUY
			</button>
		);
	}

	return (
		<a
			className="buy-item-button"
			href={whatsappLink}
			target="_blank"
			rel="noopener noreferrer"
		>
			BUY
		</a>
	);
};
