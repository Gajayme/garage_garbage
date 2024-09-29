
const MyTextArea = ({type = "text", name = "name", label = "name", id, ...rest}) => {

	return (
		<div>
			<label htmlFor={id}>{label}</label>
	 		 <textarea
				type = {type}
				id = {id}
				name = {name}
				{...rest}
			/>
		</div>
	)
}

export default MyTextArea;
