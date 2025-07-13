import {UploadPageForm} from './UploadPageForm';
import {DefaultButton} from "../../Components/Button";
import {OuterWindow} from "../../Components/Window/OuterWindow";
import {WindowHeader} from "../../Components/Window/WindowHeader";
import {ButtonLayer} from "../../Components/Window/ButtonLayer";
import {InnerWindow} from "../../Components/Window/InnerWindow";

import '../../Styles/UploadPageContent.css'

export const UploadPage = () => {
	return (
		<div>
			<OuterWindow className="outer-window">
				<WindowHeader className="window-header"/>

				<ButtonLayer className="button-layer">
					<DefaultButton className="window-navigate-button" labelText="button_1"/>
					<DefaultButton className="window-navigate-button" labelText="button_2"/>
					<DefaultButton className="window-navigate-button" labelText="button_3"/>
				</ButtonLayer>

				<InnerWindow className="inner-window">
					<UploadPageForm className="upload-page-content"/>
				</InnerWindow>
			</OuterWindow>
		</div>
)
}


