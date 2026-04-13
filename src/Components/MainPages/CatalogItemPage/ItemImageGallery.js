import { useEffect, useState } from "react";

import { ItemThumbnailButton } from "Components/ItemThumbnailButton.js";
import { SwipeArea } from "./SwipeArea.js";

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

	const goPrev = () =>
		setIndex((i) => Math.max(0, Math.min(last, i) - 1));
	const goNext = () =>
		setIndex((i) => Math.min(last, Math.max(0, Math.min(last, i)) + 1));

	return (
		<div className="item-image-gallery">
			<SwipeArea
				className="item-image-gallery__swipe-area"
				onSwipeLeft={goNext}
				onSwipeRight={goPrev}
			>
				<ItemThumbnailButton
					imageSrc={imageUrl}
					onImageClick={onImageClick}
					buttonClassName="item-image-gallery__image-button"
					imageClassName="item-image-gallery__image"
				/>
			</SwipeArea>
			<div className="item-image-gallery__controls">

				{/* кнопка перехода на предыдущее изображение */}
				{/* TODO Вынести в отдельный компонент */}
				<button
					type="button"
					className="item-image-gallery__nav-button"
					disabled={safeIndex <= 0}
					onClick={goPrev}
					aria-label="Previous image"
				>
					<img
						className="item-image-gallery__arrow"
						src={leftArrow}
						alt=""
					/>
				</button>

				{/* счетчик изображений */}
				<span className="item-image-gallery__counter" aria-live="polite">
					{safeIndex + 1}/{count}
				</span>

				{/* кнопка перехода на следующее изображение */}
				<button
					type="button"
					className="item-image-gallery__nav-button"
					disabled={safeIndex >= last}
					onClick={goNext}
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
