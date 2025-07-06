
/**
 * Компонент кнопки.
 *
 * Props:
 * - className (string): Имя класса.
 * - labelText (string): Заголовок.
 * - type (string): Тип кнопки.
 * - onClick (function): Функция обработки клика по элементу.
 */
export const DefaultButton = ({className, labelText, type = "button", onClick}) => {
	return (
		<button className={className} onClick={onClick} type={type}>
			{labelText}
		</button>
	)
}
