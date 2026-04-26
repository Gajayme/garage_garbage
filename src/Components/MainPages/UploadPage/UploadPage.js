import { Navigate, useParams } from "react-router-dom";

import { UploadPageForm } from './UploadPageForm';
import { OuterWindow } from "Components/Window/OuterWindow";
import { WindowHeader } from "Components/Window/WindowHeader";
import { ButtonLayer } from "Components/Window/ButtonLayer";
import { InnerWindow } from "Components/Window/InnerWindow";
import { DefaultNavButtons } from "Components/Navigation/DefaultNavButtons";
import { UploadNotificationState } from './UploadPageNotificationWindow'
import { UploadPageNotificationWindow } from "./UploadPageNotificationWindow";
import { useResetStateWithTimeout } from "Components/hooks/useResetStateWithTimeout.js";
import { isValidPostId } from "Components/utils/isValidPostId.js";
import * as Nav from "Components/Navigation/Constants.js";

import 'Styles/Window/OuterWindow.css'
import 'Styles/Window/WindowHeader.css'
import 'Styles/Window/ButtonLayer.css'
import 'Styles/Window/InnerWindow.css'
import 'Styles/Navigation/DefaultNavButtons.css'


export const UploadPage = () => {
	const { itemId } = useParams();

	const notificationWindowLifetime = 2000
	const [notificationState, setNotificationState] =
		useResetStateWithTimeout(
			UploadNotificationState.IDLE,
			UploadNotificationState.IDLE,
			notificationWindowLifetime
		);

	// Если в URL передан itemId — он обязан быть валидным id вещи.
	// На мусорные значения отправляем пользователя в режим создания.
	// Ранний return — после всех хуков, чтобы их количество было стабильным между рендерами.
	if (itemId != null && !isValidPostId(itemId)) {
		return <Navigate to={`/${Nav.upload}`} replace />;
	}

	const header = <WindowHeader className="window-header"/>

	const buttonLayer = <ButtonLayer className="button-layer">
		<DefaultNavButtons className="default-nav-buttons"/>
	</ButtonLayer>

	const innerWindow = <InnerWindow className="inner-window">
		<UploadPageForm
			editItemId={itemId}
			notificationStateSetter={setNotificationState}
		/>
		<UploadPageNotificationWindow notificationState={notificationState}/>
	</InnerWindow>

	return (
		<OuterWindow className="outer-window"
			header={header}
			buttonLayer={buttonLayer}
			innerWindow={innerWindow}>
		</OuterWindow>
	)
}
