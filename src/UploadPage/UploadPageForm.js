import { useState } from "react"
import { DefaultButton } from "../Common/Button.js"
import {LabeledInput} from "./LabeledInput.js"
import {LabeledDropdown} from "./LabeledDropDown.js"
import {ImageManager} from "./ImageManager/ImageManager.js"
import * as Constants from '../Common/Constants.js'


//Validations
import {NumbersOnly} from './Validations/Validations.js'
import {NonEmpty, NonEmptyImages} from './Validations/Validations.js'
import {UploadFormValidation} from './Validations/Validations.js'

// Styles
import '../Styles/UploadForm.css'
import '../Styles/MarginBottom.css'



export const UploadPageForm = () => {

	// стейты со значениями полей
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

	// стейты с ошибками для всех полей
	const [errorState, setErrorState] = useState({
		item_name: [],
		bought_for: [],
		price: [],
		buyers_part: [],
		sold_for: [],
		size: [],
		buyer: [],
		location: [],
		images: [],
	})

	// маппер стейтов и валидаций для них
	const validationMapper = {
		item_name: [NonEmpty, ],
		bought_for: [NonEmpty, ],
		price: [NonEmpty, ],
		buyers_part: [NonEmpty, ],
		sold_for: [NonEmpty, ],
		size: [],
		buyer: [NonEmpty, ],
		location: [NonEmpty, ],
		images: [NonEmptyImages, ],
	}

	// обработать нажатие на кнопку подтверждения
	const handleOnSubmit = (event) => {
		event.preventDefault()
		const errorsLocal = UploadFormValidation(formState, errorState, validationMapper)
		handleOnErrorChange(errorsLocal)

		console.log(errorsLocal)
		const hasNoErrors = Object.values(errorsLocal).every((errorArray) => errorArray.length === 0);
		if (!hasNoErrors) {
			return
		}

		fetch(Constants.upload_server_url, {
			method: Constants.http_methods.POST,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				[Constants.item_name]: formState.item_name,
				[Constants.bought_for]: parseInt(formState.bought_for, 10),
				[Constants.price]: parseInt(formState.price, 10),
				[Constants.buyer_part]: parseInt(formState.buyers_part, 10),
				[Constants.sold_for]: parseInt(formState.sold_for, 10),
				[Constants.item_size]: formState.size,
				[Constants.buyer]: formState.buyer,
				[Constants.location]: formState.location,
		}),
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.error('Ошибка:', error));


	}

	const handleOnErrorChange = (newErrorState) => {
		setErrorState(newErrorState); // Обновляем ошибки разом
	};

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
		<form onSubmit={handleOnSubmit}>

			<ImageManager			images={formState.images}		errors={errorState.images}	onChange={handleOnChangeImages('images')}	onDelete={handleOnDeleteAllImages('images')} className="margin-bottom" />

			<div className="upload-form margin-bottom">

				<LabeledInput		value={formState.item_name}		errors={errorState.item_name}		onChange={handleOnChange('item_name')}		className="upload-form-item"	labelText={Constants.item_name}		id="item_name_input"	maxLength={50}/>
				<LabeledInput 		value={formState.buyers_part}	errors={errorState.buyers_part}		onChange={handleOnChange('buyers_part')}	className="upload-form-item"	labelText={Constants.buyer_part}	id="buyer_part_input"	maxLength={10}		inputValidator={NumbersOnly}/>
				<LabeledInput 		value={formState.bought_for}	errors={errorState.bought_for}		onChange={handleOnChange('bought_for')}	className="upload-form-item"	labelText={Constants.bought_for}	id="bought_for_input"	maxLength={10}		inputValidator={NumbersOnly}/>
				<LabeledInput 		value={formState.price}			errors={errorState.price}			onChange={handleOnChange('price')}			className="upload-form-item"	labelText={Constants.price} 		id="price_input"		maxLength={10}		inputValidator={NumbersOnly}/>
				<LabeledInput 		value={formState.sold_for}		errors={errorState.sold_for}		onChange={handleOnChange('sold_for')}		className="upload-form-item"	labelText={Constants.sold_for}		id="sold_for_input"		maxLength={10}		inputValidator={NumbersOnly}/>
				<LabeledInput 		value={formState.size}												onChange={handleOnChange('size')}			className="upload-form-item"	labelText={Constants.item_size}		id="size_input"			maxLength={10}/>

				<LabeledDropdown	options={locationOptions}		errors={errorState.location}		onChange={handleOnChange('location')}		className="upload-form-item"	labelText={Constants.location}		id="location_dropdown"/>
				<LabeledDropdown 	options={buyerOptions}			errors={errorState.buyer}			onChange={handleOnChange('buyer')}			className="upload-form-item"	labelText={Constants.buyer}			id="buyer_dropdown"/>

			</div>

			<DefaultButton labelText={'Add to database'} type="submit" onClick={handleOnSubmit}/>

		</form>
	)
}
