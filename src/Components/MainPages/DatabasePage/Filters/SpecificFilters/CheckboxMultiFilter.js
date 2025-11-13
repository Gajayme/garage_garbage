
import { Checkbox } from "Components/Checkbox";

import 'Styles/MainPages/DatabasePage/Filters/SpecificFilters/FilterCheckbox.css'
import 'Styles/MainPages/DatabasePage/Filters/SpecificFilters/CheckboxMultiFilter.css'


// фильтр с чекбоксами с доступным мультивыбором
export const CheckboxMultiFilter = ({ allValues, checkedOptions, onChange, checkmarkImg}) => {
	return (
		<div className="checkbox-multifilter">
			{Object.entries(allValues).map(([id, name]) => (
				<div key={id}>
					<Checkbox
						className = {'filter-checkbox'}
						isChecked={checkedOptions.includes(id)}
						name={name}
						value={id}
						checkmarkImg={checkmarkImg}
						onChange={onChange}/>
				</div>
			))}
		</div>
	);
};
