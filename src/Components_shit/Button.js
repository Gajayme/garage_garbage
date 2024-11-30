

export const DefaultButton = ({labelText, type = "button", ...props}) => {
	return (
		<button {...props} type={type}>
			{labelText}
		</button>
	)
}
