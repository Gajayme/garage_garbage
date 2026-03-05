import {NavButton} from "./NavButton";
import * as Constants from './Constants.js'
import { useAuth } from 'Components/Auth/AuthContext.js'

import 'Styles/Navigation/NavButton.css'


/**
 * Компонент стандартного слоя навигационных кнопок.
 *
 * @param {string} className - Имя класса для стилей.
 */
export const DefaultNavButtons = ({className}) => {
	const { isAdmin } = useAuth();
	return (
		<div className={className}>
			<NavButton className="nav-button" labelText={Constants.rootLabel} destination={Constants.root}/>
			{isAdmin && <NavButton className="nav-button" labelText={Constants.uploadLabel} destination={Constants.root + Constants.upload}/>}
			<NavButton className="nav-button" labelText={Constants.catalogLabel} destination={Constants.root + Constants.catalog}/>
		</div>
	)
}
