
export const NonEmpty = (value) => {
	return value ? "" : "Field is required";
}

export const NonEmptyImages = (value) => {
	return (value.length > 0) ? "" : "It should be at least one image";
}

export const UploadFormValidation = (formValues, validationMapper) => {
	const newErrorState = {};

	for (const [formKey, formVal] of Object.entries(formValues)) {
		const validators = validationMapper[formKey] || [];
		for (const validator of validators) {
			const error = validator(formVal);
			if (error) {
				newErrorState[formKey] = [...(newErrorState[formKey] || []), error];
			}
		}
	}
	return newErrorState;
};
