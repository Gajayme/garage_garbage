
import React from 'react';

/**
 * Кастомный инпут с опциональным валидатором.
 *
 * Props:
 * @param {string} value - Текущее значение поля ввода.
 * @param {Function} onChange - Обработчик изменения значения.
 * @param {string} id - id для input.
 * @param {string} className - Классы для input.
 * @param {number} maxLength - Максимальная длина текста.
 * @param {Function|null} inputValidator - Кастомный валидатор (event, onChange) => void.
 * @param {string} type - Тип поля (по умолчанию text).
 * @param {string} placeholder - Подсказка внутри поля.
 */
export const CustomInput = ({
	value,
	onChange = () => {},
	id = null,
	className = '',
	maxLength = 0,
	inputValidator = null,
	type = 'text',
	placeholder = ''
}) => {

	const handleInput = (event) => {
		inputValidator ? inputValidator(event, onChange) : onChange(event);
};

	return (
		<input
			type={type}
			id={id}
			className={className}
			value={value}
			maxLength={maxLength || undefined}
			placeholder={placeholder}
			onChange={handleInput}
		/>
	);
};
