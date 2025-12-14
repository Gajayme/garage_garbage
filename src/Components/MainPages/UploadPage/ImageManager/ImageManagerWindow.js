import React from "react";
import {ImageManager} from "./ImageManager.js"
import {OuterWindow} from "Components/Window/OuterWindow.js"
import {InnerWindow} from "Components/Window/InnerWindow.js"
import {ButtonLayer} from "Components/Window/ButtonLayer.js"

import 'Styles/MainPages/UploadPage/Validations/ErrorText.css'
import 'Styles/Window/WindowHeader.css'
import 'Styles/Window/ButtonLayer.css'
import 'Styles/Window/InnerWindow.css'
import 'Styles/Window/OuterWindow.css'

export const ImageManagerWindow = ({images, errors, onChange, onDelete, onDeleteSpecific}) => {

	const buttonLayer = <ButtonLayer className="button-layer">
		<span>images</span>
	</ButtonLayer>

	const innerWindow = <InnerWindow className="inner-window">
		<ImageManager images={images} errors={errors} onChange={onChange} onDelete={onDelete} onDeleteSpecific={onDeleteSpecific}/>
	</InnerWindow>

	return (
		<div>
			<OuterWindow className="outer-window-image-manager"
						 buttonLayer={buttonLayer}
						 innerWindow={innerWindow}>
			</OuterWindow>
		</div>
	)
}
