import React from 'react';

import '../../Styles/ImageManager/ImageViewer.css'

export const ImageViewer = ({ images }) => {
    return (
        <div className='image-container'>

			{images.length === 0 ? (
                <p>No uploaded images.</p>
            ) : (
                images.map((image, index) => (
                	<img  key={index} className="image-item" src={image} alt={image.alt || `Image ${index}`} />
                ))
            )}
        </div>
    );
};
