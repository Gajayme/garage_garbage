import '../Styles/Labeled.css'
import "../Styles/CenteredText.css";
import "../Styles/ErrorText.css";

import React from "react";


export const LabeledInput = ({value, errors=null, onChange, id, labelText="", className="", maxLength=0}) => {


	return (
        <div className={`labeled ${className}`}>
			<label htmlFor={id}> {labelText} </label>

			<input
				value={value}
				className='centered-text'
				id = {id}
				maxLength={maxLength}
				onChange={onChange}
			/>
			{(errors && errors.length > 0) && <p className={"error-text"}>{errors[0]}</p>}
		</div>
	)
}
