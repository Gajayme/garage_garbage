
import {ButtonWithIcon} from 'Components/ButtonWithIcon.js';


// компонет, объединяющий кнопку и фильтр, который активируется этой кнопкой
export const FilterWithButton = ({filter, labelText, className, buttonClassName, iconClassName, iconInactive, iconActive, onClick, isActive}) => {
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
