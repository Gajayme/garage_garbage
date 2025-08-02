
import {NavButton} from "./NavButton";
import * as Constants from './Constants.js'

import '../../Styles/Navigation/NavigateButton.css'


export const DefaultNavButtons = ({className=""}) => {
    return (
        <div className={className}>
            <NavButton className="navigate-button" labelText={Constants.rootLabel} destination={Constants.root}/>
            <NavButton className="navigate-button" labelText={Constants.uploadLabel} destination={Constants.root + Constants.upload}/>
            <NavButton className="navigate-button" labelText={Constants.databaseLabel} destination={Constants.root + Constants.database}/>
        </div>
    )
}