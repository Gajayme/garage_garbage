
// Компонент для навигации
import React from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Upload</Link>
                </li>
                <li>
                    <Link to="/Post">Post</Link>
                </li>
            </ul>
        </nav>
	);
};
