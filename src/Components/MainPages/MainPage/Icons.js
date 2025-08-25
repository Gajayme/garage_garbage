import {NavIcon} from "Components/Navigation/NavIcon";
import * as Constants from "Components/Navigation/Constants";

import Icon1 from "Images/NavIcons/icon_1.png"
import Icon2 from "Images/NavIcons/icon_2.png"
import Icon3 from "Images/NavIcons/icon_3.png"


export const NavIcons = ({className}) => {
    console.log(className)
    return (
        <div className={className}>
            <NavIcon image = {Icon1} labelText={Constants.rootLabel} destination={Constants.root}/>
            <NavIcon image = {Icon2} labelText={Constants.uploadLabel} destination={Constants.root + Constants.upload}/>
            <NavIcon image = {Icon3} labelText={Constants.databaseLabel} destination={Constants.root + Constants.database}/>
        </div>
    )

}