import "../Styles/Labeled.css";
import "../Styles/CenteredText.css";
import React from "react";


/**
 * Компонент выпадающего списка.
 *
 * Props:
 * - options (string[]): опции, которые будут доступны для выбора.
 * - errors (string[]): ошибки, которые будут отображены под выпадающим списком.
 * - id (string): id для связи заголовка с выпадающим списком. При клике на label будет выбран соответствующий список.
 * - labelText (string): Заголовок.
 * - onChange (function): Функция-обработчик изменений.
 * - className (string): Имя класса.
 */
export const LabeledDropdown = ({options, errors, id, labelText, onChange, className=""}) => {
  return (
    <div className={`labeled ${className}`}>
		<label htmlFor={id} > {labelText } </label>

		<select id={id} onChange={onChange}>
			{Object.entries(options).map(([key, value], index) => (
				<option className="centered-text"  key={index} value={value} label={key}> {key} </option>
			))}
		</select>

        {(errors && errors.length > 0) && <p className={"error-text"}>{errors[0]}</p>}

    </div>
  );
};
