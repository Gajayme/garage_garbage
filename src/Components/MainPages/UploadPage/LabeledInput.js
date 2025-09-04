import {ErrorMessage} from "./Validations/ErrorMessage.js"

import 'Styles/MainPages/UploadPage/Labeled.css'
import "Styles/MainPages/UploadPage/Validations/ErrorText.css";
import "Styles/MainPages/UploadPage/UploadPageInput.css";


/**
 * Компонент окна ввода с заголовком.
 *
 * Props:
 * @param {string} value - Текущее значения поля ввода.
 * @param {string[]} errors - Ошибки, которые будут отображены под полем ввода.
 * @param {Function} onChange - Функция-обработчик изменений.
 * @param {string} id - id для связи заголовка с окном ввода. При клике на label будет выбрано соответствующее окно ввода.
 * @param {string} labelText - заголовок.
 * @param {string} className - Имя класса для стилизации.
 * @param {number} maxLength - Максимальное количество символов.
 * @param {Function} inputValidator - Функция-валидатор для введенного текста.
 */
export const LabeledInput = ({value, errors=null, onChange, id, labelText="", className="", maxLength=0, inputValidator=null}) => {

	const handleInput = (event) => {
		inputValidator ? inputValidator(event, onChange) : onChange(event)
	}

	return (
        <div className={`labeled ${className}`}>
			<label htmlFor={id}>
				{labelText}
			</label>

			<input value={value} className='upload-page-input' id={id} maxLength={maxLength} onChange={handleInput}/>
			<ErrorMessage errors={errors}/>
		</div>
	)
}
