
export const NumbersOnly = (event, valueSetter) => {
	const value = event.target.value;
	if (/^\d*$/.test(value)) {
		// Устанавливаем значение, если только числа
		valueSetter(event);
	} else {
		event.preventDefault();
	}
};

export const NonEmpty = (value) => {
	return value ? "" : "Field is required";
}

export const NonEmptyImages = (value) => {
	return (value.length > 0) ? "" : "It should be at least one image";
}

export const UploadFormValidation = (formValues, errorValues, validationMapper) => {
	const newErrorState = { ...errorValues }; // Копируем текущее состояние ошибок

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

// export const UploadFormValidation = (formValues, errorValues, validationMapper, handleOnErrorChange) => {
//
// 	for (const [formKey, formVal] of Object.entries(formValues)) {
// 		for (const validator of Object.values(validationMapper[formKey])) {
// 			handleOnErrorChange(formKey)(validator(formVal))
// 		}
// 	}
// }