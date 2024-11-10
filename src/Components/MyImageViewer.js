import React from 'react';

import '../Styles/ImageViewer.css'

const MyImageViewer = ({ images }) => {
    return (
        <div className='image-container'>

			{images.length === 0 ? (
                <p>Нет загруженных изображений.</p>
            ) : (
                images.map((image, index) => (
                	<img  key={index} className="image-item" src={image} alt={image.alt || `Image ${index}`} />
                ))
            )}
        </div>
    );
};

export default MyImageViewer;
