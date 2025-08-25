import {useNavigate} from 'react-router-dom';
import {DefaultButton} from "Components/Button";


/**
 * Навигационная кнопка.
 *
 * @param {string} className - Имя класса для стилей.
 * @param {string} labelText - Заголовок кнопки.
 * @param {string} destination - Дестинация, куда будет перенаправлен пользователь после нажатия кнопки.
 */
export const NavButton = ({className, labelText, destination}) => {
    const navigate = useNavigate();
    return (
        <DefaultButton className={className} labelText={labelText} onClick={() => navigate(destination)}/>
    )
}
