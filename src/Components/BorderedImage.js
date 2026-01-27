
import "Styles/NoBaselineImg.css"
import "Styles/TopAndLeftBorders.css"
import DefaultImg from "Images/default.jpg"


export const BorderedImage = ({className, imageSrc, alt}) => {

	return (
		<img
			className={`no-baseline-img top-and-left-borders ${className ?? ""}`}
			src={imageSrc ? imageSrc : DefaultImg}
			alt={alt}
		/>
	)
}
