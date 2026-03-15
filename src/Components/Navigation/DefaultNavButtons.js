import {NavButton} from "./NavButton";
import * as Constants from './Constants.js'
import { AuthChecker } from 'Components/AuthChecker.js'

import 'Styles/Navigation/NavButton.css'


/**
 * Компонент стандартного слоя навигационных кнопок.
 *
 * @param {string} className - Имя класса для стилей.
 */
export const DefaultNavButtons = ({className}) => {
	return (
		<div className={className}>
			<NavButton className="nav-button" labelText={Constants.rootLabel} destination={Constants.root}/>

			<AuthChecker>
				<NavButton className="nav-button" labelText={Constants.uploadLabel} destination={Constants.root + Constants.upload}/>
			</AuthChecker>

			<AuthChecker>
				<NavButton className="nav-button" labelText={Constants.databaseLabel} destination={Constants.root + Constants.database}/>
			</AuthChecker>

			<NavButton className="nav-button" labelText={Constants.catalogLabel} destination={Constants.root + Constants.catalog}/>
		</div>
	)
}
