import { BorderedImage } from "Components/BorderedImage.js";

import "Styles/MainPages/DatabaseItemPage/ItemImageGrid.css";


export const ItemImageGrid = ({ images, onImageClick }) => {
	if (!images) return null;

	return (
		<div className="item-image-grid">
			{images.map((imageData, index) => {
				const imageUrl = imageData ? imageData.image_url : null;
				return (
					<button
						type="button"
						key={index}
						className="item-image-grid-button"
						onClick={() => onImageClick?.(imageUrl)}
						aria-label="View image larger"
					>
						<BorderedImage
							className="item-image-grid-thumb"
							imageSrc={imageUrl}
							alt="item"
						/>
					</button>
				);
			})}
		</div>
	);
};
