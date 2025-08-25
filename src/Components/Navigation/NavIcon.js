import React from 'react';
import { useNavigate } from 'react-router-dom';

import 'Styles/Navigation/NavIcon.css'


/**
 * Навигационная иконка.
 *
 * @param {string} image - Изображение.
 * @param {string} labelText - Заголовок иконки.
 * @param {string} destination - Дестинация, куда будет перенаправлен пользователь после нажатия кнопки.
 */
export const NavIcon = ({image, labelText, destination}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(destination);
    }

    return (
        <div className={"nav-icon"} onClick={handleClick}>
            <img className={"nav-icon-image"} src={image} alt={labelText}/>
            <span>
                {labelText}
            </span>
        </div>
    )
}
