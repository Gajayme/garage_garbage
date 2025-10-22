
import { CustomCheckbox } from "Components/CustomCheckbox";

export const CheckboxMultiFilter = ({ allValues, checkedOptions, onChange}) => {

	return (
		<div>
			{allValues.map((value, idx) => (
				<div key={idx}>
					<CustomCheckbox
						isChecked={checkedOptions.includes(value)}
						value={value}
						onChange={onChange}/>
				</div>

			))}
		</div>
	);
};
