import React from 'react';
import {DeletableImage} from "./DeletableImage";

import 'Styles/ImageManager/ImageViewer.css'

export const ImageViewer = ({ images, onDeleteSpecific }) => {
    return (
        <div className='image-container'>
            {images.length === 0 ? (
                <p>No uploaded images.</p>
            ) : (
                images.map((image, _) => (
                    <DeletableImage image={image} key={image.id} onDeleteSpecific={onDeleteSpecific}/>
                ))
            )}
        </div>
    );
};
