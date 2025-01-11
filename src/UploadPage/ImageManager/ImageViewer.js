import React from 'react';

import '../../Styles/ImageManager/ImageViewer.css'

export const ImageViewer = ({ images, onDeleteSpecific }) => {
    return (
        <div className='image-container'>
			{images.length === 0 ? (
                <p>No uploaded images.</p>
            ) : (
                images.map((image, _) => (
                	<img key={image.id} className="image-item" src={image.src} alt={image.alt || `Image ${image.id}`} onClick={() => onDeleteSpecific(image.id)} />
                ))
            )}
        </div>
    );
};
