import { useState } from "react"
import MyButton from "./MyButton.js"
import MyInput from "./MyInput.js"
import MyTextArea from "./MyTextArea.js"
import MyDropdown from "./MyDropDown.js"
import MyImageUploader from "./MyImageUploader.js"
import MyImageViewer from "./MyImageViewer.js"
import validateUploadForm from "./ValidateUploadForm.js"
import * as Constants from './Constants.js';

import './Styles/UploadForm.css';



export const UploadPageForm = () => {


	// все стейты
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

	// обработать нажатие на кнопку подтверждения
	const handleOnSubmit = (event) => {
		//Validation
		let err_msg = ''
		validateUploadForm(formState, err_msg)

		event.preventDefault()
		console.log(formState)


	}

	// обработать изменение всех полей (кроме загрузки изображений)
	const handleOnChange = (key) => {
		return (event) => {
			if (event && event.target) {
				setFormState((prevState) => ({
						...prevState, [key]: event.target.value || event.target.innerText}))
				}
		}
	}

	// обработать изменение превью изображений
	const handleOnChangeImages = (key) => {
		return (event) => {
			if (event && event.target) {
				const images = Array.from(event.target.files);
				const newImages = images.map(image => URL.createObjectURL(image));
				console.log(newImages)
				setFormState((prevState) => ({
						...prevState, [key]: [...prevState[key], ...newImages]} ))
				}
		}
	}

	// удалить все изображения
	const handleOnDeleteAllImages = (key) => {
		return () => {
			setFormState((prevState) => ({
					...prevState, [key]: []} ))
			}
	}


	// TODO собрать все пропсы отдельно, а потом декомпозировать
	const buyerOptions = {
		[Constants.chooseBuyer]: "",
		[Constants.rail]: [Constants.rail],
		[Constants.ljuba]: [Constants.ljuba],
		[Constants.igor]: [Constants.igor],
		[Constants.gosha]: [Constants.gosha],
		[Constants.oleg]: [Constants.oleg],
		[Constants.unknown]: [Constants.unknown] };


	const locationOptions = {
		[Constants.chooseLocation]: "",
		[Constants.plava]: [Constants.plava],
		[Constants.gosha]: [Constants.gosha],
		[Constants.oleg]: [Constants.oleg],
		[Constants.unknown]: [Constants.unknown]
	};

	return (
		<form onSubmit={handleOnSubmit} className="grid-container">

			<MyImageViewer 		images={formState.images}/>
			<MyImageUploader	value={formState.images} 		onChange={handleOnChangeImages('images')}	onDelete={handleOnDeleteAllImages('images')}/>

			<MyTextArea			value={formState.item_name}		onChange={handleOnChange('item_name')} 		className="grid-item"	labelText={Constants.item_name}		id="item_name_textArea_1"	 rows='2' cols='30'/>

			<MyInput 			value={formState.buyers_part}	onChange={handleOnChange('buyers_part')}	className="grid-item"	labelText={Constants.buyer_part}	id="buyer_part_input"/>
			<MyInput 			value={formState.bought_for}	onChange={handleOnChange('bought_for')}		className="grid-item"	labelText={Constants.bought_for}	id="bought_for_input"/>
			<MyInput 			value={formState.price}			onChange={handleOnChange('price')}			className="grid-item"	labelText={Constants.price} 		id="price_input"/>
			<MyInput 			value={formState.sold_for}		onChange={handleOnChange('sold_for')}		className="grid-item"	labelText={Constants.sold_for}		id="sold_for_input"/>
			<MyInput 			value={formState.size}			onChange={handleOnChange('size')}			className="grid-item"	labelText={Constants.item_size}			id="size_input"/>

			<MyDropdown 		options={buyerOptions}			onChange={handleOnChange('buyer')}			className="grid-item"	labelText={Constants.buyer}			id="buyer_dropdown"/>
			<MyDropdown			options={locationOptions}		onChange={handleOnChange('location')}		className="grid-item"	labelText={Constants.location}		id="location_dropdown"/>


			<MyButton labelText={'Add to database'} type="submit" onClick={handleOnSubmit}/>

		</form>
	)
}
