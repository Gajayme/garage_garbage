
/**
 * Компонент кнопки с иконкой.
 *
 * @param {string} className - Имя класса для стилей.
 * @param {string} iconClassName - Имя класса для стилей иконки.
 * @param {string} labelText - Заголовок кнопки.
 * @param {string} icon - src иконки.
 * @param {"button" | "submit" | "reset"} type - Тип кнопки.
 * @param {Function} onClick - Функция для обработки клика по кнопке.
 * @param {string} altImg - Альтернативный текст для иконки.
 */
export const ButtonWithIcon = ({labelText, className, iconInactive, iconActive, type = "button", onClick, altImg="icon", isActive = false}) => {
	return (
		<button className={className} onClick={onClick} type={type}>
			<p> {labelText} </p>
			<img src={isActive ? iconInactive: iconActive} alt={altImg}/>
		</button>
	)
}
