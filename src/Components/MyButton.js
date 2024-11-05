
const MyButton = ({labelText, type, onClick}) => {
	return (
		<button onClick={onClick} type={type}>
		{labelText}
		</button>
	)
}

export default MyButton;
