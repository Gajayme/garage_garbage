import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { DefaultButton } from "../../Components/Button.js"
import {LabeledInput} from "../../Components/LabeledInput.js"
import {LabeledDropdown} from "../../Components/LabeledDropDown.js"
import {ImageManagerWindow} from "./ImageManager/ImageManagerWindow.js"
import * as Constants from '../../Constants.js'
import DefaultImg from "../../Imgs/tshirt_stub.svg"

//Validations
import {NumbersOnly} from './Validations/Validations.js'
import {NonEmpty, NonEmptyImages} from './Validations/Validations.js'
import {UploadFormValidation} from './Validations/Validations.js'

// Styles
import '../../Styles/UploadForm.css'
import '../../Styles/MarginBottom.css'



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
		brand: '',
		type: '',

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
		brand: [],
		type: [],

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
		brand: [NonEmpty, ],
		type: [NonEmpty, ],
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

		// Создаем объект formData
		const formData = new FormData();
		// Добавляем текстовые поля
		formData.append(Constants.item_name, formState.item_name);
		formData.append(Constants.bought_for, parseInt(formState.bought_for, 10));
		formData.append(Constants.price, parseInt(formState.price, 10));
		formData.append(Constants.buyer_part, parseInt(formState.buyers_part, 10));
		formData.append(Constants.sold_for, parseInt(formState.sold_for, 10));
		formData.append(Constants.item_size, formState.size);
		formData.append(Constants.buyer, parseInt(formState.buyer, 10));
		formData.append(Constants.location, parseInt(formState.location, 10));
		formData.append(Constants.brand, parseInt(formState.brand, 10));
		formData.append(Constants.type, parseInt(formState.type, 10));

		// Добавляем изображения (если есть)
		console.log(formState.images);
		console.log(formState.images[0].file instanceof File);
		formState.images.forEach((image, _) => {
			formData.append(Constants.files, image.file);
		});

		fetch(Constants.base_server_url + Constants.post_upload, {
			method: Constants.http_methods.POST,
			body: formData,
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
				const newImages = images.map(image => ({
					id: uuidv4(),
					file: image,
					src: URL.createObjectURL(image),
				}));
				setFormState((prevState) => ({
						...prevState, [key]: [...prevState[key], ...newImages]} ))
				}
			event.target.value = null
		}
	}

	// удалить все изображения
	const handleOnDeleteAllImages = () => {
		console.log(formState['images'])
		setFormState((prevState) => ({
			...prevState, images: []} ))
	}

	// удалить конкретное изображения
	const handleOnDeleteSpecificImage = (id) => {
		setFormState((prevState) => {
			const updatedImages = prevState['images'].filter((image) => image.id !== id);

			// Освобождаем URL только после полного удаления
			if (updatedImages.length === 0) {
				prevState['images'].forEach((image) => URL.revokeObjectURL(image.src));
			}

			return { ...prevState, 'images': updatedImages };
		});
	};

	// Автозаполнение всех полей для теста
	const handleOnTestAutofill = () => {

		// TODO тут не хватает самого изображения. Нужно сделать изображение из урла
		const img = {
			id: uuidv4(),
			src: DefaultImg,
		};

		setFormState({
			item_name: 'Кроссовки Adidas',
			bought_for: '5000',
			price: '8500',
			buyers_part: '50',
			sold_for: '8000',
			size: '42',
			buyer: 1,
			location: 1,
			brand: 1,
			type: 1,
			images: [img]  // Можно добавить тестовые объекты, если нужно
		});
	};

	const buyerOptions = {
		[Constants.chooseBuyer]: 0,
		"test": 1,
	}

	const locationOptions = {
		[Constants.chooseLocation]: 0,
		"test": 1,
	};

	const brandOptions = {
		[Constants.chooseBrand]: 0,
		"test": 1,
	};

	const typeOptions = {
		[Constants.chooseType]: 0,
		"test": 1,
	};

	return (
		<form className="upload-page-form" onSubmit={handleOnSubmit}>

			<ImageManagerWindow		images={formState.images}		errors={errorState.images}	onChange={handleOnChangeImages('images')}	onDelete={handleOnDeleteAllImages} onDeleteSpecific={handleOnDeleteSpecificImage} className="margin-bottom" />

			<div className="upload-form-texts">

				<LabeledInput		value={formState.item_name}		errors={errorState.item_name}		onChange={handleOnChange('item_name')}		className="upload-form-item"	labelText="Item Name"	id="item_name_input"	maxLength={50}/>
				<LabeledInput 		value={formState.buyers_part}	errors={errorState.buyers_part}		onChange={handleOnChange('buyers_part')}	className="upload-form-item"	labelText="Buyer Part"	id="buyer_part_input"	maxLength={10}		inputValidator={NumbersOnly}/>
				<LabeledInput 		value={formState.bought_for}	errors={errorState.bought_for}		onChange={handleOnChange('bought_for')}	className="upload-form-item"	labelText="Bought for"	id="bought_for_input"	maxLength={10}		inputValidator={NumbersOnly}/>
				<LabeledInput 		value={formState.price}			errors={errorState.price}			onChange={handleOnChange('price')}			className="upload-form-item"	labelText="Price"		id="price_input"		maxLength={10}		inputValidator={NumbersOnly}/>
				<LabeledInput 		value={formState.sold_for}		errors={errorState.sold_for}		onChange={handleOnChange('sold_for')}		className="upload-form-item"	labelText="Sold for"	id="sold_for_input"		maxLength={10}		inputValidator={NumbersOnly}/>
				<LabeledInput 		value={formState.size}												onChange={handleOnChange('size')}			className="upload-form-item"	labelText="Size"		id="size_input"			maxLength={10}/>
				<LabeledDropdown	value={formState.location}		errors={errorState.location}		onChange={handleOnChange('location')}		className="upload-form-item"	labelText="Location"	id="location_dropdown" 	options={locationOptions}/>
				<LabeledDropdown 	value={formState.buyer}			errors={errorState.buyer}			onChange={handleOnChange('buyer')}			className="upload-form-item"	labelText="Buyer"		id="buyer_dropdown" 	options={buyerOptions}/>
				<LabeledDropdown 	value={formState.brand}			errors={errorState.brand}			onChange={handleOnChange('brand')}			className="upload-form-item"	labelText="Brand"		id="brand_dropdown" 	options={brandOptions}/>
				<LabeledDropdown 	value={formState.type}			errors={errorState.type}			onChange={handleOnChange('type')}			className="upload-form-item"	labelText="Type"		id="type_dropdown" 		options={typeOptions}/>
			</div>

			<DefaultButton labelText={'TEST AUTO FILL'} type="button" onClick={handleOnTestAutofill}/>
			<DefaultButton labelText={'Add to database'} type="submit" onClick={handleOnSubmit}/>

		</form>
	)
}
