

export const CheckboxMultiFilter = ({ allOptions, selectedOptions, onChange }) => {
	const handleCheckboxChange = (option) => {
	// 	if (selectedOptions.includes(option)) {
	// 		onChange(selectedOptions.filter(b => b !== option));
	// 	} else {
	// 		onChange([...selectedOptions, option]);
	// 	}
	};

	console.log(allOptions)

	return (
		<div>
			{allOptions.map(option => (
				<div>
					<label key={option}>
					<input
						type="checkbox"
						// checked={selectedOptions.includes(option)}
						onChange={() => handleCheckboxChange(option)}
					/> {option} </label>
				</div>
			))}
		</div>
	);
};
