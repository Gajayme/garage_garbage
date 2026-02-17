import React from 'react';

import {BorderedImage} from "Components/BorderedImage.js"

import "Styles/MainPages/UploadPage/ImageManager/DeletableImage.css"
import CrossIcon from "Images/cross.png"


export const DeletableImage = ({image, onCrossClick}) => {
	return (
		<div
			className={`deletable-image-container`}
		>
			<BorderedImage
				className="deletable-image"
				imageSrc = {image.src}
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
