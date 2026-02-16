import React from 'react';
import {ImageWithCross} from "../../../ImageWithCross";

import 'Styles/MainPages/UploadPage/ImageManager/ImageViewer.css'

export const ImageViewer = ({ images, onDeleteSpecific }) => {
	return (
		<div className='image-viewer'>
			{images.length === 0 ? (
				<p>No uploaded images.</p>
			) : (
				images.map((image, _) => (
					<ImageWithCross
						className={"image-with-cross-deleteble"}
						image={image}
						key={image.id}
						onCrossClick={onDeleteSpecific}
					/>
				))
			)}
		</div>
	);
};
