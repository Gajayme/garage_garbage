import {NavIcon} from "Components/Navigation/NavIcon";
import * as Constants from "Components/Navigation/Constants";
import { AuthChecker } from 'Components/AuthChecker.js'

import catalogLogo from "Images/NavIcons/trash_bin.png"
import mainLogo from "Images/NavIcons/computer.png"


export const NavIcons = ({className}) => {
	return (
		<div className={className}>
			<NavIcon image = {mainLogo} labelText={Constants.rootLabel} destination={Constants.root}/>

			<AuthChecker>
				<NavIcon image = {catalogLogo} labelText={Constants.uploadLabel} destination={Constants.root + Constants.upload} />
			</AuthChecker>

			<NavIcon image = {catalogLogo} labelText={Constants.catalogLabel} destination={Constants.root + Constants.catalog}/>
		</div>
	)

}
