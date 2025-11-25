import React from 'react';

import {NumbersOnly} from 'Components/MainPages/UploadPage/Validations/Validations.js'
import {CustomInput} from 'Components/CustomInput.js';
import {priceMaxLength} from './Constants.js'

import 'Styles/MainPages/DatabasePage/Filters/SpecificFilters/PriceRangeFilter.css'


// фильтр с двумя окнами ввода минимального и максимального значений для фильтрации
export const RangeFilter = ({image, onChange, currentValues}) => {

	const handleMinChange = (newMin) => {
		const value = newMin.target.value;
		onChange({ ...currentValues, min: value });
	};

	const handleMaxChange = (newMax) => {
		const value = newMax.target.value;
		onChange({ ...currentValues, max: value });
	};


	return (
	<div className='price-range-container'>
		<CustomInput
			value={currentValues.min}
			className='price-input'
			type="text"
			placeholder="min"
			maxLength = {priceMaxLength}
			inputValidator={NumbersOnly}
			onChange={handleMinChange}
		/>

		<img
			className='price-icon '
			src={image}
			alt="to"
		/>

		<CustomInput
			className='price-input'
			type="text"
			placeholder="max"
			value={currentValues.max}
			maxLength = {priceMaxLength}
			inputValidator={NumbersOnly}
			onChange={handleMaxChange}
		/>
	</div>
	);
};
