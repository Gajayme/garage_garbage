import {NavIcon} from "Components/Navigation/NavIcon";
import * as Constants from "Components/Navigation/Constants";
import { useAuth } from 'Components/Auth/AuthContext.js'

import catalogLogo from "Images/NavIcons/trash_bin.png"
import mainLogo from "Images/NavIcons/computer.png"


export const NavIcons = ({className}) => {
	const { isAdmin } = useAuth();
	return (
		<div className={className}>
			<NavIcon image = {mainLogo} labelText={Constants.rootLabel} destination={Constants.root}/>
			{isAdmin && <NavIcon image = {catalogLogo} labelText={Constants.uploadLabel} destination={Constants.root + Constants.upload}/>}
			<NavIcon image = {catalogLogo} labelText={Constants.catalogLabel} destination={Constants.root + Constants.catalog}/>
		</div>
	)

}
