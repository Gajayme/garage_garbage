import { BorderedImage } from "Components/BorderedImage.js";

/**
 * Кнопка с миниатюрой товара (`BorderedImage`). По клику передаёт URL изображения
 * в колбэк — обычно для открытия модального окна с увеличенным фото.
 *
 * @param {Object} props
 * @param {string|null|undefined} props.imageSrc — URL картинки для `BorderedImage` и аргумент `onImageClick`.
 * @param {(url: string|null|undefined) => void} [props.onImageClick] — вызывается с `imageSrc` при клике; может отсутствовать.
 * @param {string} props.buttonClassName — CSS-класс для `<button>` (стили сетки/галереи задаются снаружи).
 * @param {string} props.imageClassName — CSS-класс для `BorderedImage` (ширина, отступы и т.д.).
 * @param {string} [props.ariaLabel="View image larger"] — подпись кнопки для скринридеров.
 * @param {string} [props.alt="item"] — атрибут `alt` у `<img>` внутри `BorderedImage`.
 */
export const ItemThumbnailButton = ({
	imageSrc,
	onImageClick,
	buttonClassName,
	imageClassName,
	ariaLabel = "View image larger",
	alt = "item",
}) => {
	return (
		<button
			type="button"
			className={buttonClassName}
			onClick={() => onImageClick?.(imageSrc)}
			aria-label={ariaLabel}
		>
			<BorderedImage
				className={imageClassName}
				imageSrc={imageSrc}
				alt={alt}
			/>
		</button>
	);
};
