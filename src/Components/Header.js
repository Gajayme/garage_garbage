
// Компонент для навигации
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { MyButton } from './common/MyButton';

import '../Styles/UploadPageHeader.css'

export const Header = () => {
	const navigate = useNavigate(); // Хук для навигации

	// Функции для навигации
	const goToUpload = () => navigate('/');
	const goToPost = () => navigate('/Post');

	return (
		<nav className='upload_page_header'>
			<MyButton labelText = "Upload"	onClick={goToUpload}/>
			<MyButton labelText = "Post"	onClick={goToPost}/>
        </nav>
	);
};
