import React from 'react';

import "Styles/ImageWithCross.css"
import "Styles/TopAndLeftBorders.css"
import CrossIcon from "Images/cross.png"


// TODO DMITRIY: стоит ли переиспользовать компонет (в аплодере и в модальном окне) или лучше сделать отдельные компоненты для каждого случая?
export const ImageWithCross = ({ImageClassName, image, onCrossClick, onClick}) => {
	return (
		<div
			className={`image-with-cross-container`}
			onClick={onClick}
		>

			<img
				className={`top-and-left-borders ${ImageClassName ?? ""}`}
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
