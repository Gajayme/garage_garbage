
export const Checkbox = ({className, isChecked, value, checkmarkImg, onChange}) => {
	return (

		<label className={className}>

			<input
				type="checkbox"
				checked={isChecked}
				onChange={() => onChange(value)}
			/>

			<span className="checkbox-box">
				{isChecked && <img src={checkmarkImg} alt="✓" className="checkmark" />}
			</span>

			<span> {value} </span>

		</label>
	);
};

