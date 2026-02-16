import {NavIcon} from "Components/Navigation/NavIcon";
import * as Constants from "Components/Navigation/Constants";

import catalogLogo from "Images/NavIcons/catalog_logo.png"


export const NavIcons = ({className}) => {
    return (
        <div className={className}>
            <NavIcon image = {catalogLogo} labelText={Constants.rootLabel} destination={Constants.root}/>
            <NavIcon image = {catalogLogo} labelText={Constants.uploadLabel} destination={Constants.root + Constants.upload}/>
            <NavIcon image = {catalogLogo} labelText={Constants.catalogLabel} destination={Constants.root + Constants.catalog}/>
        </div>
    )

}
