
export const MyButton = ({labelText, type = "button", ...props}) => {
	return (
		<button {...props} type={type}>
			{labelText}
		</button>
	)
}
