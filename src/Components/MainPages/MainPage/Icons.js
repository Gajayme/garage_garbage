import {NavIcon} from "Components/Navigation/NavIcon";
import * as Constants from "Components/Navigation/Constants";

import Icon1 from "Images/NavIcons/icon_1.png"
import Icon2 from "Images/NavIcons/icon_2.png"
import Icon3 from "Images/NavIcons/icon_3.png"

import 'Styles/Navigation/NavIcon.css'
import 'Styles/MainPageNavIcons.css'


export const NavIcons = () => {

    return (
        <div className={"main-page-nav-icons"}>
            <NavIcon className="nav-icon" image = {Icon1} labelText={Constants.rootLabel} destination={Constants.root}/>
            <NavIcon className="nav-icon" image = {Icon2} labelText={Constants.uploadLabel} destination={Constants.root + Constants.upload}/>
            <NavIcon className="nav-icon" image = {Icon3} labelText={Constants.databaseLabel} destination={Constants.root + Constants.database}/>
        </div>
    )

}