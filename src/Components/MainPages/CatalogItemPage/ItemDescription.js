import "Styles/MainPages/CatalogItemPage/ItemDescription.css";

/**
 * Компонент с текстом описания вещи.
 *
 * @param {string} description - текст описания
 */
export const ItemDescription = ({ description }) => {
	if (description == null || description === "") return null;

	return (
		<div className="item-description">
			<p>{String(description)}</p>
		</div>
	);
};
