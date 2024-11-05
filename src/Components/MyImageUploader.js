import MyButton from "./MyButton.js";

import '../Styles/Hidden.css';

const redirectToFileInput = () => {
    document.getElementById('fileInput').click(); // Программно открыть диалог выбора файлов
};

const MyImageUploader = ({value, onChange, onDelete}) => {
	return (
		<div>
			<input className="hidden" id="fileInput" type="file" accept="image/*" multiple onChange={onChange} />

			<MyButton labelText={'UploadImage'} type="button" onClick={redirectToFileInput}/>
			<MyButton labelText={'Delete all images'} type="button" onClick={onDelete}/>

			<div>
			  <p>Загружено изображений: {value.length}</p>
			</div>

	  </div>
	);
  };


export default MyImageUploader;
