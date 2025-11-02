
import { Checkbox } from "Components/Checkbox";

import 'Styles/MainPages/DatabasePage/Filters/FilterCheckbox.css'
import 'Styles/MainPages/DatabasePage/Filters/CheckboxMultiFilter.css'



export const CheckboxMultiFilter = ({ allValues, checkedOptions, onChange, checkmarkImg}) => {

	return (
		<div className="checkbox-multifilter">
			{allValues.map((value, idx) => (
				<div key={idx}>
					<Checkbox
						className = {'filter-checkbox'}
						isChecked={checkedOptions.includes(value)}
						value={value}
						checkmarkImg={checkmarkImg}
						onChange={onChange}/>
				</div>
			))}
		</div>
	);
};
