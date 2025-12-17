
export const NumbersOnly = (event) => {
	const value = event.target.value;
	if (/^\d*$/.test(value))
		return event
	return null
}

export const NonEmpty = (value) => {
	return value ? "" : "Field is required";
}

export const NonEmptyImages = (value) => {
	return (value.length > 0) ? "" : "It should be at least one image";
}

export const UploadFormValidation = (formValues, errorValues, validationMapper) => {
	// const newErrorState = { ...errorValues }; // Копируем текущее состояние ошибок
	const newErrorState = { }; // Копируем текущее состояние ошибок

	for (const [formKey, formVal] of Object.entries(formValues)) {
		for (const validator of validationMapper[formKey]) {
			const error = validator(formVal);
			if (error) {
				newErrorState[formKey] = [...(newErrorState[formKey] || []), error];
			}
		}
	}
	return(newErrorState);
};
