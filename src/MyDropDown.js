import "./Styles/LabeledElement.css";

const MyDropdown = ({options, id, labelText, onChange}) => {
  return (
    <div className="labeled_element">
		<label> {labelText} </label>
		<select id={id} onChange={onChange}>
			{options.map((optionValue, index) => (
				<option key={index} value={optionValue} label={optionValue}> {optionValue} </option>
			))}
		</select>
    </div>
  );
};

export default MyDropdown;
