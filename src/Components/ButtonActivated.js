
import '../Styles/ButtonActivated.css'


export const ButtonActivated = ({labelText, type = "button", isActive, ...props}) => {

	return (
		<button
			{...props}
			type = {type}
			className={isActive ? "button activated" : "button"}>

		{labelText}

		</button>
	);
};
