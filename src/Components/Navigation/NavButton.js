import React from 'react';
import { useNavigate } from 'react-router-dom';


import {DefaultButton} from "../Button";

export const NavButton = ({className, labelText, destination}) => {
    const navigate = useNavigate();
    return (
        <DefaultButton className={className} labelText={labelText} onClick={() => navigate(destination)}/>
    )
}
