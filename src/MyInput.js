import './Styles/LabeledElement.css'


const MyInput = (props) => {
	const {label, type, id,  ...rest} = props

	return (
		<div className="labeled_element">
			<label htmlFor={id}> {label} </label>

			<input
				{...rest}
				id = {id}
				type={type}
			/>
		</div>
	)
}

export default MyInput;
