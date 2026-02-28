import {OuterWindow} from "Components/Window/OuterWindow.js"
import {InnerWindow} from "Components/Window/InnerWindow.js"
import {ButtonLayer} from "Components/Window/ButtonLayer.js"
import {WindowHeader} from "Components/Window/WindowHeader.js"
import {DefaultNavButtons} from "Components/Navigation/DefaultNavButtons.js"

import 'Styles/Window/OuterWindow.css'
import 'Styles/Window/WindowHeader.css'
import 'Styles/Window/ButtonLayer.css'
import 'Styles/Window/InnerWindow.css'
import 'Styles/Navigation/DefaultNavButtons.css'

export const LoginPage = () => {

	const header = <WindowHeader className="window-header"/>

	const buttonLayer = <ButtonLayer className="button-layer">
		<DefaultNavButtons className="default-nav-buttons"/>
	</ButtonLayer>

	const innerWindow = <InnerWindow className="inner-window">
		{/* Контент страницы */}
	</InnerWindow>

	return (
		<div>
			<OuterWindow
				className="outer-window"
				header={header}
				buttonLayer={buttonLayer}
				innerWindow={innerWindow}>
			</OuterWindow>
		</div>
	)
}
