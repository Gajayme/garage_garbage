import '../Styles/Labeled.css'
import "../Styles/CenteredText.css";
import { none } from './Constants';


export const LabeledInput = ({value, onChange, id, labelText="", className="", maxLength=0, Validation=none}) => {

	const onChangeWithValidation = (event) => {
		if (Validation !== none) {
			Validation(event, onChange)
		} else {
			onChange(event)
		}
	}

	return (
        <div className={`labeled ${className}`}>
			<label htmlFor={id}> {labelText} </label>

			<input
				value={value}
				className='centered-text'
				id = {id}
				maxLength={maxLength}
				onChange={onChangeWithValidation}
			/>
		</div>
	)
}
