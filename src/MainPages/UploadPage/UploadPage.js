import {UploadPageForm} from './UploadPageForm';
import {DefaultButton} from "../../Components/Button";
import {OuterWindow} from "../../Components/Window/OuterWindow";
import {WindowHeader} from "../../Components/Window/WindowHeader";
import {ButtonLayer} from "../../Components/Window/ButtonLayer";
import {InnerWindow} from "../../Components/Window/InnerWindow";

import '../../Styles/UploadPageContent.css'

export const UploadPage = () => {

	const header = <WindowHeader className="window-header"/>

	const buttonLayer = <ButtonLayer className="button-layer">
		<DefaultButton className="window-navigate-button" labelText="button_1"/>
		<DefaultButton className="window-navigate-button" labelText="button_2"/>
		<DefaultButton className="window-navigate-button" labelText="button_3"/>
	</ButtonLayer>

	const innerWindow = <InnerWindow className="inner-window">
		<UploadPageForm className="upload-page-content"/>
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


