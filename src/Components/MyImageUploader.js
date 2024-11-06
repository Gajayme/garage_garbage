import MyButton from "./common/MyButton.js";

import '../Styles/Hidden.css';

const redirectToFileInput = () => {
    document.getElementById('fileInput').click(); // Программно открыть диалог выбора файлов
};

const MyImageUploader = ({value, onChange, onDelete}) => {
	return (
		<div>
			<input className="hidden" id="fileInput" type="file" accept="image/*" multiple onChange={onChange} />

			<div>
			  <p>Загружено изображений: {value.length}</p>
			</div>

			<MyButton labelText={'UploadImage'} type="button" onClick={redirectToFileInput}/>
			<MyButton labelText={'Delete all images'} type="button" onClick={onDelete}/>


	  </div>
	);
  };


export default MyImageUploader;
