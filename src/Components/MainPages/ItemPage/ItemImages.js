import { BorderedImage } from "Components/BorderedImage.js";

export const ItemImages = ({ className, images, onImageClick }) => {
	if (!images) return null;

	return (
		<div className={className}>
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
							imageSrc={imageUrl}
							alt="item"
						/>
					</button>
				);
			})}
		</div>
	);
};
