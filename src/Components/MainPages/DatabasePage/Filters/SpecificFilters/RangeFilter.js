import React from 'react';

import {NumbersOnly} from 'Components/MainPages/UploadPage/Validations/Validations.js'
import {CustomInput} from 'Components/CustomInput.js';

import {priceMaxLength} from '../Constants.js'

import 'Styles/MainPages/DatabasePage/Filters/SpecificFilters/PriceRangeFilter.css'

export const RangeFilter = ({image, currentValues}) => {
	return (
	<div className='price-range-container'>
		<CustomInput
			value={currentValues.min}
			className='price-input'
			type="text"
			placeholder="min"
			maxLength = {priceMaxLength}
			inputValidator={NumbersOnly}
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
		/>
	</div>
	);
};
