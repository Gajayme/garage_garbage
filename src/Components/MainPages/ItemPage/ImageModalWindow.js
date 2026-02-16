
import "Styles/MainPages/ItemPage/ImageModalWindow.css";
import { ImageWithCross } from "Components/ImageWithCross";

export const ImageModalWindow = ({ imageUrl, onClose }) => {
	if (!imageUrl) return null;

	const modalImage = {
		id: "modal-image",
		src: imageUrl,
		alt: "Enlarged item",
	};

	return (
		<div
			className="image-modal-overlay"
			onClick={onClose}
			role="button"
			tabIndex={0}
			onKeyDown={(e) => e.key === "Escape" && onClose()}
			aria-label="Close modal"
		>
			<ImageWithCross
				ImageClassName="image-with-cross-image-modal"
				image={modalImage}
				onCrossClick={() => onClose()}
				onClick={(e) => e.stopPropagation()}
			/>
		</div>
	);
};
