
export const CustomCheckbox = ({isChecked, value, onChange}) => {
	return (
		<label>
			<input
				type="checkbox"
				checked={isChecked}
				onChange={() => onChange(value)}
			/>
			{value} </label>
	);
};

