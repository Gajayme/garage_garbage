import React from "react";
import {ImageUploader} from "./ImageUploader.js";
import {ImageViewer} from "./ImageViewer.js";
import {ErrorMessage} from "Components/MainPages/UploadPage/Validations/ErrorMessage.js"

import 'Styles/MainPages/UploadPage/Validations/ErrorText.css'
import 'Styles/MainPages/UploadPage/ImageManager/ImageManager.css'

export const ImageManager = ({images, errors, onChange, onDelete, onDeleteSpecific}) => {
	return (
		<div className="image-manager">
			<ImageViewer onDeleteSpecific={onDeleteSpecific} images={images}/>
			<ImageUploader onChange={onChange} onDelete={onDelete}/>
			<ErrorMessage className={"error-text"} errors={errors}/>
		</div>
	)
}
