import {DefaultButton} from "../Button.js";

import '../../Styles/Hidden.css';

const redirectToFileInput = () => {
    document.getElementById('fileInput').click(); // Программно открыть диалог выбора файлов
};

export const ImageUploader = ({images, onChange, onDelete}) => {
	return (
		<div>
			<input className="hidden" id="fileInput" type="file" accept="image/*" multiple onChange={onChange} />

			<div>
			  <p>Загружено изображений: {images.length}</p>
			</div>

			<DefaultButton labelText={'Delete all images'}	onClick={onDelete}/>
			<DefaultButton labelText={'UploadImage'}		onClick={redirectToFileInput}/>


	  </div>
	);
  };


