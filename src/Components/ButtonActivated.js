
import '../Styles/ButtonActivated.css'


/**
 * Компонент "активируемой" кнопки.
 *
 * Props:
 * - labelText (string): Заголовок.
 * - type (string): Тип кнопки.
 * - isActive (bool): Активна ли кнопка.
 * - onClick (function): Функция обработки клика по элементу.
 */
export const ButtonActivated = ({labelText, type = "button", isActive, onClick}) => {

	return (
		<button onClick = {onClick} type = {type} className={"button "  + (isActive ? "activated" : "inactive")}>
			{labelText}
		</button>
	);
};
