import React from 'react';

import "Styles/MainPages/UploadPage/ImageManager/DeletableImage.css"
import "Styles/BorderedImageContainer.css"
import DeleteIcon from "Images/delete_image_cross.png"


export const DeletableImage = ({ image, onDeleteSpecific}) => {
	return (
		<div className="deletable-image-container bordered-image-container">
			<img className="deletable-image" key={image.id}  src={image.src} alt={image.alt || `Image ${image.id}`}/>
			<img className="delete-icon" src={DeleteIcon} alt="Delete icon" onClick={() => onDeleteSpecific(image.id)}/>
		</div>
	)
};
