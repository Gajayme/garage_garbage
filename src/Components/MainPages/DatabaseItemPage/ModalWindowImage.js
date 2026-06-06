import React from 'react';

import {BorderedImage} from "Components/BorderedImage.js"

import "Styles/MainPages/DatabaseItemPage/ModalWindowImageDatabase.scss"
import CrossIcon from "Assets/Icons/cross_gray.svg"


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
				className="cross-icon-button-database"
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
