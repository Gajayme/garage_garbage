import { useState } from "react";

import { ItemImages } from "./ItemImages.js";
import { ItemDescription } from "./ItemDescription.js";
import { ItemModalWindow } from "./ItemModalWindow.js";
import { buildItemData } from "./Utils.js";
import { useItemDetails } from "./useItemDetails.js";

import "Styles/MainPages/CatalogItemPage/ImagesAndDescriptionWrapper.css";
import "Styles/CenteredText.css";

export const ItemPageContent = ({ itemID }) => {
	const [modalImageUrl, setModalImageUrl] = useState(null);

	const { data, isFetching, error } = useItemDetails(itemID);

	if (isFetching) {
		return <p className="centered-text">Loading...</p>;
	}

	if (error) {
		return (
			<p className="centered-text">Error while loading item details</p>
		);
	}

	const itemData = buildItemData(data ? data.data : null);
	const images = data ? data.data.images : null;

	return (
		<div className="images-and-description-wrapper">
			<ItemImages images={images} onImageClick={setModalImageUrl} />
			<ItemDescription data={itemData} />
			<ItemModalWindow
				imageUrl={modalImageUrl}
				onClose={() => setModalImageUrl(null)}
			/>
		</div>
	);
};
