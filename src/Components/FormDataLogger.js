
export const FormDataLogger = (formData) => {
	for (let [key, value] of formData.entries()) {
		console.log(`${key}:`, value);
	}
}
