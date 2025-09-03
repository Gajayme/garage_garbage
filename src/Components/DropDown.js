
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
        <select className={className} value={value} id={id} onChange={onChange}>
            {Object.entries(options).map(([key, value], index) => (
                <option className={optionClassName}  key={index} value={value} label={key}> {key} </option>
            ))}
        </select>
    );
};
