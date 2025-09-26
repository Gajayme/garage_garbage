import { useState, useEffect } from "react"

import {UploadPageForm} from './UploadPageForm';
import {OuterWindow} from "Components/Window/OuterWindow";
import {WindowHeader} from "Components/Window/WindowHeader";
import {ButtonLayer} from "Components/Window/ButtonLayer";
import {InnerWindow} from "Components/Window/InnerWindow";
import {DefaultNavButtons} from "Components/Navigation/DefaultNavButtons";
import {UploadNotificationState} from './UploadPageNotificationWindow'
import { UploadPageNotificationWindow } from "./UploadPageNotificationWindow";

import 'Styles/Navigation/DefaultNavButtons.css'


export const UploadPage = () => {

	const header = <WindowHeader className="window-header"/>

	const buttonLayer = <ButtonLayer className="button-layer">
		<DefaultNavButtons className="default-nav-buttons"/>
	</ButtonLayer>

	//#region uplpad notification logic
	const [notificationState, setNotificationState] = useState(UploadNotificationState.IDLE)

	const notificationWindowLifetime = 2000

	useEffect(() => {
		if (notificationState === UploadNotificationState.IDLE) {
			return
		}

		const timeout = setTimeout(() => {
			setNotificationState(UploadNotificationState.IDLE);
		}, notificationWindowLifetime);

		return () => clearTimeout(timeout); // очистка таймера при размонтировании/перерендере
	}, [notificationState]);

	//#endregion

	const innerWindow = <InnerWindow className="inner-window">
		<UploadPageForm notificationStateSetter={setNotificationState}/>
		<UploadPageNotificationWindow notificationState={notificationState}/>
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
