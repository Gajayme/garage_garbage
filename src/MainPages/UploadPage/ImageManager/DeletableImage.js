import React from 'react';

import "../../../Styles/ImageManager/DeletableImage.css"
import DeleteIcon from "../../../Imgs/delete_image_cross.png"


export const DeletableImage = ({ image, onDeleteSpecific}) => {
    return (
        <div className="deletable-image-container">
            <img key={image.id} className="deletable-image" src={image.src} alt={image.alt || `Image ${image.id}`}/>
            <img className="delete-icon" src={DeleteIcon} alt="Delete icon" onClick={() => onDeleteSpecific(image.id)}/>
        </div>
    )
};
