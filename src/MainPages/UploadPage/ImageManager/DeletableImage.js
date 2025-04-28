import React, {useState} from 'react';

import "../../../Styles/ImageManager/DeletableImage.css"
import DeleteIcon from "../../../Imgs/delete_image_cross.png"


export const DeletableImage = ({ image, onDeleteSpecific }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className="deletable-image-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>

            <img key={image.id} className="deletable-image" src={image.src} alt={image.alt || `Image ${image.id}`}/>

            {isHovered && (
                <img className="delete-icon" src={DeleteIcon} alt="Delete icon" onClick={() => onDeleteSpecific(image.id)}/>
            )}
        </div>
    )
};
