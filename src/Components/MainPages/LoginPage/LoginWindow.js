import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CustomInput } from 'Components/CustomInput.js'
import { DefaultButton } from 'Components/Button.js'
import { useLogin } from './useLogin.js'
import { useAuth } from 'Components/Auth/AuthContext.js'
import * as Nav from 'Components/Navigation/Constants'

import 'Styles/MainPages/LoginPage/LoginWindow.css'

export const LoginWindow = () => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()
	const { checkAuth } = useAuth()

	const { mutate: doLogin, isPending, error } = useLogin()

	const handleOnLogin = () => {
		doLogin(
			{ login, password },
			{
				onSuccess: async () => {
					await checkAuth()
					navigate(`/${Nav.upload}`)
				},
			}
		)
	}

	return (
		<div className="login-window">

			<p
				className="centered-text">
					Emm... to be honest, it's only for us.
					You're not supposed to be here....
			</p>

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
