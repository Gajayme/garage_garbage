import "../Styles/LabeledElement.css";
import "../Styles/CenteredText.css";

export const LabeledDropdown = ({options, id, labelText, onChange, className=""}) => {
  return (
    <div className={`labeled_element ${className}`}>
		<label htmlFor={id} > {labelText } </label>

		<select id={id} onChange={onChange}>
			{Object.entries(options).map(([key, value], index) => (
				<option className="centered-text"  key={index} value={value} label={key}> {key} </option>
			))}
		</select>

    </div>
  );
};
