import React from 'react';
import {CatalogPageContent} from "./CatalogPageContent";
import {WindowHeader} from "Components/Window/WindowHeader";
import {ButtonLayer} from "Components/Window/ButtonLayer";
import {InnerWindow} from "Components/Window/InnerWindow";
import {OuterWindow} from "Components/Window/OuterWindow";
import {DefaultNavButtons} from "Components/Navigation/DefaultNavButtons";

import 'Styles/Navigation/DefaultNavButtons.css'

export const CatalogPage = () => {
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
            <CatalogPageContent className="catalog-page-content" />
          </InnerWindow>
        }
      />
    </div>
  );
};
