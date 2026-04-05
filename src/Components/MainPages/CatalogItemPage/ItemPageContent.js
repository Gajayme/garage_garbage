import { useState } from "react";

import { ItemImageGrid } from "./ItemImageGrid.js";
import { ItemImageGallery } from "./ItemImageGallery.js";
import { ItemDescription } from "./ItemDescription.js";
import { ItemModalWindow } from "./ItemModalWindow.js";
import { buildItemData } from "./Utils.js";
import { useItemDetails } from "./useItemDetails.js";
import { useHeightGreaterThanWidth } from "./useHeightGreaterThanWidth.js";

import "Styles/MainPages/CatalogItemPage/ImagesAndDescriptionWrapper.css";
import "Styles/CenteredText.css";

export const ItemPageContent = ({ itemID }) => {
	const [modalImageUrl, setModalImageUrl] = useState(null);
	const tallNarrowViewport = useHeightGreaterThanWidth();

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

	const wrapperClass = tallNarrowViewport
		? "images-and-description-wrapper-narrow-screen"
		: "images-and-description-wrapper-wide-screen";

	return (
		<div className={wrapperClass}>
			{tallNarrowViewport ? (
				<ItemImageGallery images={images} />
			) : (
				<ItemImageGrid images={images} onImageClick={setModalImageUrl} />
			)}
			<ItemDescription data={itemData} />
			<ItemModalWindow
				imageUrl={modalImageUrl}
				onClose={() => setModalImageUrl(null)}
			/>
		</div>
	);
};
