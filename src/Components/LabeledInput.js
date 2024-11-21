import '../Styles/LabeledElement.css'
import "../Styles/CenteredText.css";


export const LabeledInput = (props) => {
	const {labelText, type, id, className="", maxLength=0} = props

	return (
        <div className={`labeled_element ${className}`}>
			<label htmlFor={id}> {labelText} </label>

			<input
				className='centered-text'
				id = {id}
				type={type}
				maxLength={maxLength}
			/>
		</div>
	)
}
