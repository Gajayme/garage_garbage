
/**
 * Компонент выпадающего списка.
 *
 * @param {string} value - Текущее выбранное значение.
 * @param {Object} options - Опции, доступные для выбора.
 * @param {string} id - id выпадающего списка.
 * @param {Function} onChange - Функция для обработки выбора новой опции.
 * @param {string} className - Имя класса выпадающего списка.
 * @param {string} optionClassName - Имя класса опции внутри выпадающего списка.
 */
export const Dropdown = ({value, options, id, onChange, className, optionClassName}) => {
	return (
		<select className={className}
			// Защита от null
			value={value ?? ''}
			id={id}
			// Если пустая строка (дефолтное значение) то отправляем на валидацию null
			onChange={(e) => onChange(e.target.value || null)}>
			{Object.entries(options).map(([key, value], index) => (
				<option
					className={optionClassName}
					key={index}
					value={value}
					label={key}>
					{key}
					</option>
			))}
		</select>
	);
};
