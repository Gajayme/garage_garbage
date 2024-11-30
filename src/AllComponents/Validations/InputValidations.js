
export const NumbersOnly = (event, valueSetter) => {
	const value = event.target.value;
	console.log("In validation...")

	if (/^\d*$/.test(value)) {
		// Устанавливаем значение, если только числа
		valueSetter(event);
	} else {
		event.preventDefault();
	}
};
