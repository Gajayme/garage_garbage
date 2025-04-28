
/**
 * Компонент кнопки.
 *
 * Props:
 * - labelText (string): Заголовок.
 * - type (string): Тип кнопки.
 * - onClick (function): Функция обработки клика по элементу.
 */
export const DefaultButton = ({labelText, type = "button", onClick}) => {
	return (
		<button onClick={onClick} type={type}>
			{labelText}
		</button>
	)
}
