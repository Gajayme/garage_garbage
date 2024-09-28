import { useState } from "react"
import MyButton from "./MyButton.js"
import MyInput from "./MyInput.js"
import MyTextArea from "./MyTextArea.js"




export const TestForm = () => {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		cellphone: '',
		data: '',
	})

	const handleOnSubmit = (event) => {
		event.preventDefault()
		console.log(formState)
	}

	const handleOnChange = (key) => {
		return (event) => {
			setFormState((prevState) => ({ ...prevState, [key]: event.target.value }))
		}
	}

	return (
		<form onSubmit={handleOnSubmit}>
			<MyInput label="name" value={formState.name} onChange={handleOnChange('name')} id="input_1"/>
			<MyInput label="email" value={formState.email} onChange={handleOnChange('email')} id="input_2" />
			<MyInput label="cellphone" value={formState.cellphone} onChange={handleOnChange('cellphone')} id="input_3" />
			<MyTextArea label="data" placeholder="enter text" id="textArea_1" rows='2' cols='30' value={formState.data} onChange={handleOnChange('data')} />

			<MyButton labelText={'Submit form'}  onClick={handleOnSubmit}/>

			{/* <button type="submit"></button> */}
		</form>
	)
}
