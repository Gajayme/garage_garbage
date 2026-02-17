import React from 'react';

import "Styles/MainPages/UploadPage/ImageManager/DeletableImage.css"
import "Styles/TopAndLeftBorders.css"
import CrossIcon from "Images/cross.png"


export const DeletableImage = ({image, onCrossClick}) => {
	return (
		<div
			className={`deletable-image-container`}
		>
			<img
				className="top-and-left-borders deletable-image"
				src={image.src}
				alt={image.alt || `Image ${image.id}`}
			/>
			<button
				type="button"
				className="cross-icon-button"
				aria-label="Delete"
				onClick={() => onCrossClick(image.id)}
			>
				<img src={CrossIcon} alt="" className="cross-icon" />
			</button>
		</div>
	)
};
