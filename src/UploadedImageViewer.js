import React from 'react';
import './ImageGallery.css'; // Подключите стили, если необходимо

// const ImageGallery = ({ images }) => {
//     return (
//         <div className="image-gallery">
//             {images.length === 0 ? (
//                 <p>Нет загруженных изображений.</p>
//             ) : (
//                 images.map((image, index) => (
//                     <div key={index} className="image-item">
//                         <img src={image.src} alt={image.alt || `Image ${index}`} />
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// };

export default ImageGallery;
