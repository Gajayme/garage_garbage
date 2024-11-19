import "../Styles/LabeledElement.css";
import "../Styles/CenteredOption.css";

export const LabeledDropdown = ({options, id, labelText, onChange}) => {
  return (
    <div className="labeled_element">
		<label> {labelText} </label>
		<select id={id} onChange={onChange}>
			{Object.entries(options).map(([key, value], index) => (
				<option className="centered_option"  key={index} value={value} label={key}/>
			))}
		</select>
    </div>
  );
};
