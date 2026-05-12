
import "Styles/TopAndLeftBorders.css"
import DefaultImg from "Assets/Images/default.jpg"


export const BorderedImage = ({className, imageSrc, alt}) => {

	return (
		<img
			className={`top-and-left-borders ${className ?? ""}`}
			src={imageSrc ? imageSrc : DefaultImg}
			alt={alt}
		/>
	)
}
