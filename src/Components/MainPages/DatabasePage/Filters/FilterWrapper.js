
import {ButtonWithIcon} from 'Components/ButtonWithIcon.js';


export const FilterWrapper = ({filter, labelText, className, buttonClassName, iconClassName, iconInactive, iconActive, onClick, isActive}) => {
	return (
		<div className={className}>
			<ButtonWithIcon
				labelText = {labelText}
				className = {buttonClassName}
				iconClassName = {iconClassName}
				iconInactive = {iconInactive}
				iconActive = {iconActive}
				onClick = {onClick}
				isActive = {isActive}
			/>

			{isActive && filter}
		</div>
	)
};
