
export const NumbersOnly = (event) => {
	const value = event.target.value;
	if (/^\d*$/.test(value))
		return event
	return null
}
