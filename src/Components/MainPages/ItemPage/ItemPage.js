
import { useParams } from "react-router-dom";

import {OuterWindow} from "Components/Window/OuterWindow.js"
import {InnerWindow} from "Components/Window/InnerWindow.js"
import {ButtonLayer} from "Components/Window/ButtonLayer.js"
import {WindowHeader} from "Components/Window/WindowHeader.js"
import {DefaultNavButtons} from "Components/Navigation/DefaultNavButtons.js";

export const ItemPage = () => {

	// Получение id вещи для запроса
	const { id } = useParams();
	console.log(id)
	// id === "123" для /Catalog/123

	const header = <WindowHeader className="window-header"/>

	const buttonLayer = <ButtonLayer className="button-layer">
		<DefaultNavButtons className="default-nav-buttons"/>
	</ButtonLayer>

		const innerWindow = <InnerWindow className="inner-window">
			<p>TEXT</p>
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
