
import "Styles/MainPages/ItemPage/ImageModalWindow.css";

export const ImageModalWindow = ({ imageUrl, onClose }) => {
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
			<div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
				<button
					type="button"
					className="image-modal-close"
					onClick={onClose}
					aria-label="Close"
				>
					×
				</button>
				<img src={imageUrl} alt="Enlarged item" className="image-modal-image" />
			</div>
		</div>
	);
};
