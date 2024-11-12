
import '../../Styles/ButtonActivated.css'


export const ButtonActivated = ({labelText, type = "button", isActive, ...props}) => {

	return (
		<button
			{...props}
			labelText = {labelText}
			type = {type}
			className={isActive ? "button activated" : "button"}>

		{labelText}

		</button>
	);
};
