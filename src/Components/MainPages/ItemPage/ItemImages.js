import { BorderedImage } from "Components/BorderedImage.js";

import "Styles/MainPages/ItemPage/ItemImages.css";


export const ItemImages = ({images, onImageClick }) => {
	if (!images) return null;

	return (
		<div className="item-images">
			{images.map((imageData, index) => {
				const imageUrl = imageData ? imageData.image_url : null;
				return (
					<button
						type="button"
						key={index}
						className="item-image-button"
						onClick={() => onImageClick?.(imageUrl)}
						aria-label="View image larger"
					>
						<BorderedImage
							className="item-image"
							imageSrc={imageUrl}
							alt="item"
						/>
					</button>
				);
			})}
		</div>
	);
};
