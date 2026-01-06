
import { useParams } from "react-router-dom";

import { OuterWindow } from "Components/Window/OuterWindow.js"
import { InnerWindow } from "Components/Window/InnerWindow.js"
import { ButtonLayer } from "Components/Window/ButtonLayer.js"
import { WindowHeader } from "Components/Window/WindowHeader.js"
import { DefaultNavButtons } from "Components/Navigation/DefaultNavButtons.js";
import { ItemPageContent } from "./ItemPageContent";


export const ItemPage = () => {

	// Получение id вещи для запроса
	// id === "123" для /Catalog/123
	const { id } = useParams();

	const header = <WindowHeader className="window-header"/>

	const buttonLayer = <ButtonLayer className="button-layer">
		<DefaultNavButtons className="default-nav-buttons"/>
	</ButtonLayer>

	const innerWindow = <InnerWindow className="inner-window">
		<ItemPageContent
			itemID={id}>
		</ItemPageContent>
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
