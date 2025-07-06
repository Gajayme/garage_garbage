import {OuterWindow} from "../../Components/Window/OuterWindow.js"
import {InnerWindow} from "../../Components/Window/InnerWindow.js"
import {ButtonLayer} from "../../Components/Window/ButtonLayer.js"
import {WindowHeader} from "../../Components/Window/WindowHeader.js"

import {DefaultButton} from "../../Components/Button.js"

import '../../Styles/Window/OuterWindow.css'
import '../../Styles/Window/WindowHeader.css'
import '../../Styles/Window/ButtonLayer.css'
import '../../Styles/Window/InnerWindow.css'

import '../../Styles/WindowNavigateButton.css'

export const MainPage = () => {
	return (
		<div>
			<OuterWindow className="outer-window">
				<WindowHeader className="window-header"/>

				<ButtonLayer className="button-layer">
						<DefaultButton className="window-navigate-button" labelText="button_1"/>
						<DefaultButton className="window-navigate-button" labelText="button_2"/>
						<DefaultButton className="window-navigate-button" labelText="button_3"/>
				</ButtonLayer>

				<InnerWindow className="inner-window"/>
			</OuterWindow>
		</div>
	)
}
