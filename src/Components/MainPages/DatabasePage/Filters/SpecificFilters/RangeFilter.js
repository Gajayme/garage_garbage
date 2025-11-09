import React from 'react';

import 'Styles/MainPages/DatabasePage/Filters/SpecificFilters/PriceRangeFilter.css'


export const RangeFilter = ({image, setValue}) => {
	return (
	<div className='price-range-container'>
		<input
			className='price-input'
			type="number"
			placeholder="min"
			value={setValue.min}
		/>

		<img
			className='price-icon '
			src={image}
			alt="to"
		/>

		<input
			className='price-input'
			type="number"
			placeholder="max"
			value={setValue.max}
		/>
	</div>
	);
};
