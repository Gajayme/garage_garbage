import React from 'react';

import "Styles/NoBaselineImg.css"
import "Styles/MainPages/UploadPage/ImageManager/DeletableImage.css"
import "Styles/TopAndLeftBorders.css"
import DeleteIcon from "Images/delete_image_cross.png"


export const DeletableImage = ({ image, onDeleteSpecific}) => {
	return (
		<div className="deletable-image-container top-and-left-borders">
			<img className="no-baseline-img deletable-image" key={image.id}  src={image.src} alt={image.alt || `Image ${image.id}`}/>
			<img className="delete-icon" src={DeleteIcon} alt="Delete icon" onClick={() => onDeleteSpecific(image.id)}/>
		</div>
	)
};
