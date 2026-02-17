import "Styles/MainPages/ItemPage/ItemModalWindow.css";
import { ModalWindowImage } from "./ModalWindowImage";

export const ItemModalWindow = ({ imageUrl, onClose }) => {

	if (!imageUrl) return null;

	return (
		<div
			className="image-modal-overlay"
			onClick={onClose}
			role="button"
			tabIndex={0}
			onKeyDown={(e) => e.key === "Escape" && onClose()}
			aria-label="Close modal"
		>
			<ModalWindowImage
				imageUrl={imageUrl}
				onCrossClick={() => onClose()}
				onClick={(e) => e.stopPropagation()}
			/>
		</div>
	);
};
