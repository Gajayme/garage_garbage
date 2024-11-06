
const MyButton = ({labelText, ...props}) => {
	return (
		<button type="button" {...props}>
		{labelText}
		</button>
	)
}

export default MyButton;
