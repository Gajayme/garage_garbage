
const MyButton = ({labelText = "label", type = "submit", onClick}) => {
	return (
		<button onClick={onClick} type={type}>
		labelText
		</button>
	)
}

export default MyButton;
