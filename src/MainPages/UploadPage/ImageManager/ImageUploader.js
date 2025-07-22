import {DefaultButton} from "../../../Components/Button.js";

import '../../../Styles/Hidden.css';
import '../../../Styles/ImageManager/ImageUploader.css'

// Часть костыля, перенаправляющего нажатие кнопки на теальный (но скрытый) инпут.
const redirectToFileInput = () => {
    document.getElementById('fileInput').click(); // Программно открыть диалог выбора файлов
};

export const ImageUploader = ({onChange, onDelete}) => {
	return (
		<div className="image-uploader-buttons">
			{/* Реальный инпут. Скрыт, так как для него нельзя настроить внешний вид. Поэтому сделано костылем */}
			<input className="hidden" id="fileInput" type="file" accept="image/*" multiple onChange={onChange} />
			<DefaultButton labelText={'UploadImage'}		onClick={redirectToFileInput}/>
			<DefaultButton labelText={'Delete all images'}	onClick={onDelete}/>
	  </div>
	);
  };


