
import DefaultImg from "Images/default.jpg"

export const ItemImages = ({className, images}) => {

	return (
		<div className={className}>

			{images.map((imageData, index) => (
				<img
					src={imageData ? imageData.image_url : DefaultImg}
					alt={"item"}
					key={index}
				/>
			)
		)}

		</div>
	)
}
