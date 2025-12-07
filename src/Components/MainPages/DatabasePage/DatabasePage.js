import React from 'react';
import {DatabasePageContent} from "./DatabasePageContent";
import {WindowHeader} from "Components/Window/WindowHeader";
import {ButtonLayer} from "Components/Window/ButtonLayer";
import {InnerWindow} from "Components/Window/InnerWindow";
import {OuterWindow} from "Components/Window/OuterWindow";
import {DefaultNavButtons} from "Components/Navigation/DefaultNavButtons";

import 'Styles/Navigation/DefaultNavButtons.css'

export const DatabasePage = () => {
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
            <DatabasePageContent className="database-page-content" />
          </InnerWindow>
        }
      />
    </div>
  );
};
