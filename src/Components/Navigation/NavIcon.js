import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NavIcon = ({className, image, labelText, destination}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(destination);
    }

    return (
        <div className={className} onClick={handleClick}>
            <img className={"nav-icon-image"} src={image} alt={labelText}/>
            <span>
                {labelText}
            </span>
        </div>
    )
}
