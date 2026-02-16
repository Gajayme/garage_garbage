import React from 'react';

import "Styles/MainPages/UploadPage/ImageManager/DeletableImage.css"
import "Styles/TopAndLeftBorders.css"
import CrossIcon from "Images/delete_image_cross.png"


export const ImageWithCross = ({className, image, onCrossClick}) => {
	return (
		<div
			className={`top-and-left-borders ${className ?? ""}`}
		>
			<img
				className="image-with-cross"
				src={image.src}
				alt={image.alt || `Image ${image.id}`}
			/>
			<button
				type="button"
				className="cross-icon-button"
				aria-label="Close"
				onClick={() => onCrossClick(image.id)}
			>
				<img src={CrossIcon} alt="" className="cross-icon" />
			</button>
		</div>
	)
};
