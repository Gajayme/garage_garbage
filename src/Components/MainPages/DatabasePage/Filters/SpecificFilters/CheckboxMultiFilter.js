
import { Checkbox } from "Components/Checkbox";

import 'Styles/MainPages/DatabasePage/Filters/FilterCheckbox.css'
import 'Styles/MainPages/DatabasePage/Filters/SpecificFilters/CheckboxMultiFilter.css'


// фильтр с чекбоксами с доступным мультивыбором
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
