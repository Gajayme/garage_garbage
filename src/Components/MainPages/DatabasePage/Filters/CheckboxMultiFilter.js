

export const CheckboxMultiFilter = ({ allBrands, selectedBrands, onChange }) => {
	const handleCheckboxChange = (brand) => {
		if (selectedBrands.includes(brand)) {
			onChange(selectedBrands.filter(b => b !== brand));
		} else {
			onChange([...selectedBrands, brand]);
		}
	};

	return (
		<div className="brand-filter">
			{brandOptions.map(brand => (
				<label key={brand}>
				<input type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => handleCheckboxChange(brand)}/>
				{brand} </label>
			))}
		</div>
	);
};
