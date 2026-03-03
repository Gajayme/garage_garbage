import React, { useState } from 'react'
import { CustomInput } from 'Components/CustomInput.js'
import { DefaultButton } from 'Components/Button.js'

import 'Styles/MainPages/LoginPage/LoginWindow.css'

export const LoginWindow = () => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')


	const handleOnLogin = () => {
		console.log('login', login)
		console.log('password', password)
	}

	return (
		<div className="login-window">
			<CustomInput
				value={login}
				onChange={(e) => setLogin(e.target.value)}
				id="login"
				className="login-window__input top-and-left-borders"
				placeholder="Login"
				type="text"
			/>
			<CustomInput
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				id="password"
				className="login-window__input top-and-left-borders"
				placeholder="Password"
				type="password"
			/>

			<DefaultButton
				className="login-window__button"
				onClick={handleOnLogin}
				labelText="Login"
			/>
		</div>
	)
}
