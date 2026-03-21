import { OuterWindow } from "Components/Window/OuterWindow";
import { WindowHeader } from "Components/Window/WindowHeader";
import { ButtonLayer } from "Components/Window/ButtonLayer";
import { InnerWindow } from "Components/Window/InnerWindow";
import { DefaultNavButtons } from "Components/Navigation/DefaultNavButtons";
import { SettingsPageContent } from "./SettingsPageContent.js";

import "Styles/Window/OuterWindow.css";
import "Styles/Window/WindowHeader.css";
import "Styles/Window/ButtonLayer.css";
import "Styles/Window/InnerWindow.css";
import "Styles/Navigation/DefaultNavButtons.css";

export const SettingsPage = () => {
	return (
		<div>
			<OuterWindow
				className="outer-window"
				header={<WindowHeader className="window-header" />}
				buttonLayer={
					<ButtonLayer className="button-layer">
						<DefaultNavButtons className="default-nav-buttons" />
					</ButtonLayer>
				}
				innerWindow={
					<InnerWindow className="inner-window">
						<SettingsPageContent />
					</InnerWindow>
				}
			/>
		</div>
	);
};
