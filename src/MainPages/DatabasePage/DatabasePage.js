
import React from 'react';

import "../../Styles/DatabaseItems.css"
import "../../Styles/Bordered.css"
import {DatabasePageContent} from "./DatabasePageContent";
import {WindowHeader} from "../../Components/Window/WindowHeader";
import {ButtonLayer} from "../../Components/Window/ButtonLayer";
import {DefaultNavButtons} from "../../Components/Navigation/DefaultNavButtons";
import {InnerWindow} from "../../Components/Window/InnerWindow";
import {OuterWindow} from "../../Components/Window/OuterWindow";


export const DatabasePage = () => {

    const header = <WindowHeader className="window-header"/>

    const buttonLayer = <ButtonLayer className="button-layer">
        <DefaultNavButtons className="default-nav-buttons"/>
    </ButtonLayer>

    const innerWindow = <InnerWindow className="inner-window">
        <DatabasePageContent/>
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
