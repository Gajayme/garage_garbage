
import {UploadPageError} from "./UploadPageError.js"

import '../Styles/Labeled.css'
import "../Styles/ErrorText.css";
import "../Styles/UploadPageInput.css";


import React from "react";

/**
 * Компонент окна ввода с заголовком.
 *
 * Props:
 * - value (string): Значение, которое будет отображаться в окне ввода.
 * - errors (string[]): ошибки, которые будут отображены под выпадающим списком.
 * - onChange (function): Функция-обработчик изменений.
 * - id (string): id для связи заголовка с окном ввода. При клике на label будет выбрано соответствующее окно ввода.
 * - labelText (string): Заголовок.
 * - className (string): Имя класса.
 * - maxLength (number): Максимальное количество символов.
 * - inputValidator (function): Валидатор для введенного текста.
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
			<UploadPageError errors={errors}/>
		</div>
	)
}
