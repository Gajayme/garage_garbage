import React, { useState } from 'react'
import { CustomInput } from 'Components/CustomInput.js'
import { DefaultButton } from 'Components/Button.js'
import { useLogin } from './useLogin.js'

import 'Styles/MainPages/LoginPage/LoginWindow.css'

export const LoginWindow = () => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	const { mutate: doLogin, isPending, error } = useLogin()

	const handleOnLogin = () => {
		doLogin({ login, password })
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
				disabled={isPending}
			/>
			{error && <div className="login-window__error">{error.message}</div>}
			{isPending && <div className="login-window__sending">Sending…</div>}

		</div>
	)
}
