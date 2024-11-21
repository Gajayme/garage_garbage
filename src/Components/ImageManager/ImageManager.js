
import {ImageUploader} from "./ImageUploader.js";
import {ImageViewer} from "./ImageViewer.js";

import '../../Styles/ImageManager/ImageManager.css'
import '../../Styles/Bordered.css'

export const ImageManager = ({images, onChange, onDelete}) => {
	return <div className="image-manager bordered">
		<ImageViewer images={images}/>
		<ImageUploader images={images} onChange={onChange} onDelete={onDelete}/>
	</div>
}
