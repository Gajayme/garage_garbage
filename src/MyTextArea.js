import "./Styles/FixedTextArea.css";
import "./Styles/LabeledElement.css";

const MyTextArea = ({type = "text", name = "name", label = "name", id, ...rest}) => {

	return (
		<div className="labeled_element">
			<label htmlFor={id}>{label}</label>
	 		<textarea {...rest} type = {type} id = {id} name = {name} className="fixed-textarea"/>
		</div>
	)
}

export default MyTextArea;
