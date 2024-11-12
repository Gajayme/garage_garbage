
// Компонент для навигации
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ButtonActivated } from './common/ButtonActivated.js';

import '../Styles/UploadPageHeader.css'

export const Header = () => {
	const navigate = useNavigate(); // Хук для навигации

	const uploadTitle = "Upload"
	const postTitle = "Post"

	// Функции для навигации
	const goToUpload = () => {
		navigate('/');
		setActiveButton(uploadTitle);
	}

	const goToPost = () => {
		navigate('/Post');
		setActiveButton(postTitle);
	}

	const [activeButton, setActiveButton] = useState(uploadTitle)

	return (
		<nav className='upload_page_header'>

			<ButtonActivated	labelText = {uploadTitle}	onClick={goToUpload}	isActive={activeButton===uploadTitle}/>
			<ButtonActivated	labelText = {postTitle}		onClick={goToPost}		isActive={activeButton==="Post"}/>

		</nav>
	);
};
