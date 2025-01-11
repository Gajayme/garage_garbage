import React from "react";

import {ImageUploader} from "./ImageUploader.js";
import {ImageViewer} from "./ImageViewer.js";

import '../../Styles/ImageManager/ImageManager.css'
import '../../Styles/MarginBottom.css'
import '../../Styles/Bordered.css'
import '../../Styles/ErrorText.css'

export const ImageManager = ({images, errors, onChange, onDelete, onDeleteSpecific, className=""}) => {
	return <div className={className}>
		<div className={`image-manager bordered-round-2`}>
			<ImageViewer onDeleteSpecific={onDeleteSpecific} images={images}/>
			<ImageUploader onChange={onChange} onDelete={onDelete}/>
		</div>

		<div>
			{( errors && errors.length > 0) && <p className={"error-text"}>{errors[0]}</p>}
		</div>
	</div>
}
