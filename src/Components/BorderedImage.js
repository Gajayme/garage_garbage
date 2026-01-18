
import "Styles/TopAndLeftBorders.css"
import DefaultImg from "Images/default.jpg"


export const BorderedImage = ({className, imageSrc, altText, key = 0}) => {

	return (
		<img
			className={`top-and-left-borders + ${className}`}
			src={imageSrc ? imageSrc : DefaultImg}
			alt={altText}
			key={key}
		/>
	)
}
