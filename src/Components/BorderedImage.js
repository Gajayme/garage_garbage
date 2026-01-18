
import "Styles/TopAndLeftBorders.css"
import DefaultImg from "Images/default.jpg"


export const BorderedImage = ({className, image, altText, key = 0}) => {

	return (
		<img
			className={`top-and-left-borders + ${className}`}
			src={image ? image : DefaultImg}
			alt={altText}
			key={key}
		/>
	)
}
