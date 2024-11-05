import '../Styles/LabeledElement.css'


const MyInput = (props) => {
	const {labelText, type, id,  ...rest} = props

	return (
		<div className="labeled_element">
			<label htmlFor={id}> {labelText} </label>

			<input
				{...rest}
				id = {id}
				type={type}
			/>
		</div>
	)
}

export default MyInput;
