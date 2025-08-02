
// Компонент для навигации
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonActivated } from '../Components/ButtonActivated.js';

import '../Styles/Header.css'
import '../Styles/MarginBottom.css'

export const Header = () => {
	const navigate = useNavigate(); // Хук для навигации

	const mainTitle = "Main"
	const uploadTitle = "Upload"
	const databaseTitle = "Database"

	// Функции для навигации
	const goToUpload = () => {
		navigate('/Upload');
		setActiveButton(uploadTitle);
	}

	const goToMain = () => {
		navigate('/');
		setActiveButton(mainTitle);
	}

	const goToDatabase = () => {
		navigate('/Database');
		setActiveButton(databaseTitle);
	}


	const [activeButton, setActiveButton] = useState(uploadTitle)

	return (
		<nav className='header margin-bottom'>

			<ButtonActivated	labelText = {mainTitle}		onClick={goToMain}		isActive={activeButton===mainTitle}/>
			<ButtonActivated	labelText = {uploadTitle}	onClick={goToUpload}	isActive={activeButton===uploadTitle}/>
			<ButtonActivated	labelText = {databaseTitle}	onClick={goToDatabase}	isActive={activeButton===databaseTitle}/>

		</nav>
	);
};
