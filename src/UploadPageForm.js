import { useState } from "react"
import MyButton from "./MyButton.js"
import MyInput from "./MyInput.js"
import MyTextArea from "./MyTextArea.js"
import MyDropdown from "./MyDropDown.js"
import MyImageUploader from "./MyImageUploader.js"
import * as Constants from './Constants.js';

import './Styles/UploadForm.css';



export const UploadPageForm = () => {

	const [formState, setFormState] = useState({
		item_name: '',
		bought_for: '',
		price: '',
		buyers_part: '',
		sold_for: '',
		size: '',
		buyer: '',
		location: '',

		images: [],
	})

	const handleOnSubmit = (event) => {
		event.preventDefault()
		console.log(formState)
	}

	const handleOnChange = (key) => {
		return (event) => {
			if (event && event.target) {
				setFormState((prevState) => ({
						...prevState, [key]: event.target.value || event.target.innerText}))
				}
		}
	}

	const handleOnChangeImages = (key) => {
		return (event) => {
			if (event && event.target) {
				const files = Array.from(event.target.files);
				setFormState((prevState) => ({
						...prevState, [key]: [...prevState[key], ...files]} ))
				}
		}
	}


	// TODO собрать все пропсы отдельно, а потом декомпозировать
	const buyerOptions = [Constants.chooseBuyer, Constants.rail, Constants.ljuba, Constants.igor, Constants.gosha, Constants.oleg, Constants.unknown];
	const locationOptions = [Constants.chooseLocation, Constants.plava, Constants.gosha, Constants.oleg, Constants.unknown];

	return (
		<form onSubmit={handleOnSubmit} className="grid-container">

			<MyImageUploader 														value={formState.images} 		onChange={handleOnChangeImages('images')} />

			<MyTextArea className="grid-item"	label="Item name"	id="textArea_1"	value={formState.item_name}		onChange={handleOnChange('item_name')} rows='2' cols='30' />

			<MyInput 	className="grid-item"	label="Buyers part"	id="input_1"	value={formState.buyers_part}	onChange={handleOnChange('buyers_part')}/>
			<MyInput 	className="grid-item"	label="Bought for"	id="input_2"	value={formState.bought_for}	onChange={handleOnChange('bought_for')} />
			<MyInput 	className="grid-item"	label="Price" 		id="input_3"	value={formState.price}			onChange={handleOnChange('price')} />
			<MyInput 	className="grid-item"	label="Sold For"	id="input_4"	value={formState.sold_for}		onChange={handleOnChange('sold_for')} />
			<MyInput 	className="grid-item"	label="Size"		id="input_5"	value={formState.size}			onChange={handleOnChange('size')} />

			<MyDropdown className="grid-item"	label="Buyer"		id="dropdown_1"	options={buyerOptions}			onChange={handleOnChange('buyer')} />
			<MyDropdown className="grid-item"	label="Location"	id="dropdown_2"	options={locationOptions}		onChange={handleOnChange('location')} />


			<MyButton labelText={'Add to database'} onClick={handleOnSubmit}/>
		</form>
	)
}
