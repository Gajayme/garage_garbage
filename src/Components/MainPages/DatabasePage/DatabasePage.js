import { OuterWindow } from "Components/Window/OuterWindow";
import { WindowHeader } from "Components/Window/WindowHeader";
import { ButtonLayer } from "Components/Window/ButtonLayer";
import { InnerWindow } from "Components/Window/InnerWindow";
import { DefaultNavButtons } from "Components/Navigation/DefaultNavButtons";
import { DatabasePageContent } from "Components/MainPages/DatabasePage/DatabasePageContent.js";

import "Styles/Window/OuterWindow.css";
import "Styles/Window/WindowHeader.css";
import "Styles/Window/ButtonLayer.css";
import "Styles/Window/InnerWindow.css";
import "Styles/Navigation/DefaultNavButtons.css";

export const DatabasePage = () => {
	const header = <WindowHeader className="window-header" />;

	const buttonLayer = (
		<ButtonLayer className="button-layer">
			<DefaultNavButtons className="default-nav-buttons" />
		</ButtonLayer>
	);

	const innerWindow = (
		<InnerWindow className="inner-window">
			<DatabasePageContent />
		</InnerWindow>
	);

	return (
		<OuterWindow
			className="outer-window"
			header={header}
			buttonLayer={buttonLayer}
			innerWindow={innerWindow}
		/>
	);
};
