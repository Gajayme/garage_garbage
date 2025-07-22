import React from "react";

import {ImageUploader} from "./ImageUploader.js";
import {ImageViewer} from "./ImageViewer.js";
import {ImageUploadErrors} from "./ImageUploadErrors.js"

import '../../../Styles/ErrorText.css'
import '../../../Styles/ImageManager/ImageManager.css'

export const ImageManager = ({images, errors, onChange, onDelete, onDeleteSpecific}) => {
	return (
		<div className="image-manager">
			<ImageViewer onDeleteSpecific={onDeleteSpecific} images={images}/>
			<ImageUploader onChange={onChange} onDelete={onDelete}/>
			<ImageUploadErrors className={"error-text"} errors={errors}/>
		</div>
	)
}
