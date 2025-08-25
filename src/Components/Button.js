
/**
 * Компонент кнопки.
 *
 * @param {string} className - Имя класса для стилей.
 * @param {string} labelText - Заголовок кнопки.
 * @param {"button" | "submit" | "reset"} type - Тип кнопки.
 * @param {Function} onClick - Функция для обработки клика по кнопке.
 */
export const DefaultButton = ({className, labelText, type = "button", onClick}) => {
	return (
		<button className={className} onClick={onClick} type={type}>
			{labelText}
		</button>
	)
}
