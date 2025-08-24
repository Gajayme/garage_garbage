import {UploadPageForm} from './UploadPageForm';
import {OuterWindow} from "Components/Window/OuterWindow";
import {WindowHeader} from "Components/Window/WindowHeader";
import {ButtonLayer} from "Components/Window/ButtonLayer";
import {InnerWindow} from "Components/Window/InnerWindow";
import {DefaultNavButtons} from "Components/Navigation/DefaultNavButtons";

import 'Styles/Navigation/DefaultNavButtons.css'


export const UploadPage = () => {

	const header = <WindowHeader className="window-header"/>

	const buttonLayer = <ButtonLayer className="button-layer">
		<DefaultNavButtons className="default-nav-buttons"/>
	</ButtonLayer>

	const innerWindow = <InnerWindow className="inner-window">
		<UploadPageForm/>
	</InnerWindow>

	return (
		<div>
			<OuterWindow className="outer-window"
				header={header}
				buttonLayer={buttonLayer}
				innerWindow={innerWindow}>
			</OuterWindow>
		</div>
)
}


