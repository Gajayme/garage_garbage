
import { BorderedImage } from "Components/BorderedImage.js"


export const ItemImages = ({className, images}) => {

	return (
		<div className={className}>

			{images.map((imageData, index) => (
				<BorderedImage
					image = {imageData ? imageData.image_url: null}
					alt={"item"}
					key={index}
 				/>
			)
		)}

		</div>
	)
}
