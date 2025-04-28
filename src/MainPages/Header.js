
// Компонент для навигации
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonActivated } from '../Components/ButtonActivated.js';

import '../Styles/Header.css'
import '../Styles/MarginBottom.css'

export const Header = () => {
	const navigate = useNavigate(); // Хук для навигации

	const uploadTitle = "Upload"
	const postTitle = "Post"
	const databaseTitle = "Database"

	// Функции для навигации
	const goToUpload = () => {
		navigate('/');
		setActiveButton(uploadTitle);
	}

	const goToPost = () => {
		navigate('/Post');
		setActiveButton(postTitle);
	}

	const goToDatabase = () => {
		navigate('/Database');
		setActiveButton(databaseTitle);
	}


	const [activeButton, setActiveButton] = useState(uploadTitle)

	return (
		<nav className='header margin-bottom'>

			<ButtonActivated	labelText = {uploadTitle}	onClick={goToUpload}	isActive={activeButton===uploadTitle}/>
			<ButtonActivated	labelText = {postTitle}		onClick={goToPost}		isActive={activeButton==="Post"}/>
			<ButtonActivated	labelText = {databaseTitle}	onClick={goToDatabase}	isActive={activeButton==="Database"}/>

		</nav>
	);
};
