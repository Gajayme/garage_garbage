

const MyInput = (props) => {
	const {type = "text", name = "name", label = "labe", id, ...rest} = props

	return (
		<div>
			<label htmlFor={id}> {label} </label>

			<input
				id = {id}
				{...rest}
				type={type}
			/>
		</div>
	)
}

export default MyInput;
