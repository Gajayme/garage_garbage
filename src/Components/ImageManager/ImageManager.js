
import {ImageUploader} from "./ImageUploader.js";
import {ImageViewer} from "./ImageViewer.js";

export const ImageManager = ({images, onChange, onDelete}) => {
	return <div>
		<ImageViewer images={images}/>
		<ImageUploader images={images} onChange={onChange} onDelete={onDelete}/>
	</div>
}
