import {OuterWindow} from "Components/Window/OuterWindow.js"
import {InnerWindow} from "Components/Window/InnerWindow.js"
import {ButtonLayer} from "Components/Window/ButtonLayer.js"
import {WindowHeader} from "Components/Window/WindowHeader.js"
import {DefaultNavButtons} from "Components/Navigation/DefaultNavButtons.js";
import {NavIcons} from "./Icons.js"


import 'Styles/Window/OuterWindow.css'
import 'Styles/Window/WindowHeader.css'
import 'Styles/Window/ButtonLayer.css'
import 'Styles/Window/InnerWindow.css'
import 'Styles/Navigation/DefaultNavButtons.css'

export const MainPage = () => {

	const header = <WindowHeader className="window-header"/>

	const buttonLayer = <ButtonLayer className="button-layer">
		<DefaultNavButtons className="default-nav-buttons"/>
	</ButtonLayer>

	const innerWindow = <InnerWindow className="inner-window">
		<NavIcons/>
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
