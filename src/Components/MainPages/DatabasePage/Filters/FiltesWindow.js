
import {OuterWindow} from "Components/Window/OuterWindow.js"
import {DefaultButton} from 'Components/Button.js';

import 'Styles/MainPages/DatabasePage/Filters/FiltersWindow.css'

export const FiltersWindow = () => {


	const filters = <div className="outer-window-filters">
		<DefaultButton classname="filter-button" labelText={"Brand"}></DefaultButton>
		<DefaultButton classname="filter-button" labelText={"Size"}></DefaultButton>
		<DefaultButton classname="filter-button" labelText={"Price"}></DefaultButton>
	</div>

	return (
		<div>
			<OuterWindow innerWindow={filters}>
			</OuterWindow>
		</div>
	)
}
