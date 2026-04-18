import { BorderedImage } from "Components/BorderedImage.js";

import "Styles/MainPages/DatabasePage/Items/DatabaseItem.css";
import "Styles/TopAndLeftBorders.css";

export const DatabaseItem = ({ value, onClick }) => {
	const imageSrc = value.images?.[0]?.image_url ?? null;
	const name = value.itemName;
	const price = value.price;

	return (
		<div className="catalog-item" onClick={onClick}>
			<BorderedImage
				className="catalog-item-image"
				imageSrc={imageSrc}
				alt="item"
			/>

			<p title={name}> {name}</p>
			<p title={price}> {price}</p>
		</div>
	);
};
