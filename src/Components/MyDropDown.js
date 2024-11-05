import "../Styles/LabeledElement.css";

const MyDropdown = ({options, id, labelText, onChange}) => {
  return (
    <div className="labeled_element">
		<label> {labelText} </label>
		<select id={id} onChange={onChange}>
			{Object.entries(options).map(([key, value], index) => (
				<option key={index} value={value} label={key}/>
			))}
		</select>
    </div>
  );
};

export default MyDropdown;
