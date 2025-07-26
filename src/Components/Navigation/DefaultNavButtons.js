
import {NavButton} from "./NavButton";
import * as Constants from './Constants.js'

import '../../Styles/Navigation/NavigateButton.css'


export const DefaultNavButtons = ({className=""}) => {
    return (
        <div className={className}>
            <NavButton className="navigate-button" labelText={Constants.rootLabel} destination={Constants.root}/>
            <NavButton className="navigate-button" labelText={Constants.postLabel} destination={Constants.root + Constants.post}/>
            <NavButton className="navigate-button" labelText={Constants.databaseLabel} destination={Constants.root + Constants.database}/>
        </div>
    )
}