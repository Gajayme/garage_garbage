import {NavButton} from "./NavButton";
import * as Constants from './Constants.js'

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
            <NavButton className="nav-button" labelText={Constants.uploadLabel} destination={Constants.root + Constants.upload}/>
            <NavButton className="nav-button" labelText={Constants.databaseLabel} destination={Constants.root + Constants.database}/>
        </div>
    )
}