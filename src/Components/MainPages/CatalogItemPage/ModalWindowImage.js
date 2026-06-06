import React from 'react';

import {BorderedImage} from "Components/BorderedImage.js"

import "Styles/MainPages/CatalogItemPage/ModalWindowImage.scss"
import CrossIcon from "Assets/Icons/cross.svg"


export const ModalWindowImage = ({imageUrl, onCrossClick, onClick}) => {
	return (
		<div
			className={`image-container`}
			onClick={onClick}
		>
			<BorderedImage
				className={"modal-window-image"}
				imageSrc={imageUrl}
				alt="enlarged"
			/>
			<button
				type="button"
				className="cross-icon-button"
				aria-label="Close"
				onClick={() => onCrossClick()}
			>
				<img
					src={CrossIcon}
					alt="close"
					className="cross-icon"
				/>
			</button>
		</div>
	)
};
