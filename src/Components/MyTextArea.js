import "../Styles/FixedTextArea.css";
import "../Styles/LabeledElement.css";

const MyTextArea = ({type = "text", name, labelText, id, ...rest}) => {

	return (
		<div className="labeled_element">
			<label htmlFor={id}>{labelText}</label>
	 		<textarea {...rest} type = {type} id = {id} name = {name} className="fixed-textarea"/>
		</div>
	)
}

export default MyTextArea;
