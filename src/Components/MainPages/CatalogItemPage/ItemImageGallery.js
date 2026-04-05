import { useEffect, useState } from "react";

import { BorderedImage } from "Components/BorderedImage.js";

import leftArrow from "Images/CatalogItem/left_arrow.png";
import rightArrow from "Images/CatalogItem/arrow_right.png";

import "Styles/MainPages/CatalogItemPage/ItemImageGallery.css";

const getImageUrl = (imageData) => {
	if (imageData == null) return null;
	if (typeof imageData === "string") return imageData;
	return imageData.image_url ?? null;
};

export const ItemImageGallery = ({ images, onImageClick }) => {
	const [index, setIndex] = useState(0);

	const count = images?.length ?? 0;

	useEffect(() => {
		setIndex(0);
	}, [images]);

	useEffect(() => {
		setIndex((i) => Math.min(i, Math.max(0, count - 1)));
	}, [count]);

	if (!images || count === 0) return null;

	const last = count - 1;
	const safeIndex = Math.min(Math.max(0, index), last);
	const imageUrl = getImageUrl(images[safeIndex]);

	return (
		<div className="item-image-gallery">
			<button
				type="button"
				className="item-image-gallery__image-button"
				onClick={() => onImageClick?.(imageUrl)}
				aria-label="View image larger"
			>
				<BorderedImage
					className="item-image-gallery__image"
					imageSrc={imageUrl}
					alt="item"
				/>
			</button>
			<div className="item-image-gallery__controls">
				<button
					type="button"
					className="item-image-gallery__nav-button"
					disabled={safeIndex <= 0}
					onClick={() =>
						setIndex((i) =>
							Math.max(0, Math.min(last, i) - 1),
						)
					}
					aria-label="Previous image"
				>
					<img
						className="item-image-gallery__arrow"
						src={leftArrow}
						alt=""
					/>
				</button>
				<span className="item-image-gallery__counter" aria-live="polite">
					{safeIndex + 1}/{count}
				</span>
				<button
					type="button"
					className="item-image-gallery__nav-button"
					disabled={safeIndex >= last}
					onClick={() =>
						setIndex((i) =>
							Math.min(last, Math.max(0, Math.min(last, i)) + 1),
						)
					}
					aria-label="Next image"
				>
					<img
						className="item-image-gallery__arrow"
						src={rightArrow}
						alt=""
					/>
				</button>
			</div>
		</div>
	);
};
