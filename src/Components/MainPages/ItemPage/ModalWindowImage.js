import React from 'react';

import "Styles/TopAndLeftBorders.css"
import "Styles/MainPages/ItemPage/ModalWindowImage.css"
import CrossIcon from "Images/cross.png"


export const ModalWindowImage = ({imageUrl, onCrossClick, onClick}) => {
	return (
		<div
			className={`image-container`}
			onClick={onClick}
		>
			<img
				className={"modal-window-image top-and-left-borders"}
				src={imageUrl}
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
