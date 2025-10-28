
export const Checkbox = ({className, isChecked, value, onChange}) => {
	return (
		
		<label className={className}>
			<input
				className={isChecked ? "checked" : ""}
				type="checkbox"
				checked={isChecked}
				onChange={() => onChange(value)}
			/>
			{value}
		</label>
	);
};

