import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

import { DefaultButton } from "Components/Button.js"
import { NumbersOnly } from './Validations/Validations.js'
import { FormDataLogger } from "Components/FormDataLogger.js";
import { UploadFormValidation } from './Validations/Validations.js'
import { NonEmpty, NonEmptyImages } from './Validations/Validations.js'
import { ImageManagerWindow } from "./ImageManager/ImageManagerWindow.js"
import { UploadNotificationState } from './UploadPageNotificationWindow.js'
import { LabeledInput } from "Components/MainPages/UploadPage/LabeledInput.js"
import { LabeledDropdown } from "Components/MainPages/UploadPage/LabeledDropDown.js"
import { useInputParams } from "Components/MainPages/UploadPage/useInputParams.js"

import * as Constants from 'Constants.js'

import 'Styles/MainPages/UploadPage/UploadPageForm.css'
import 'Styles/MainPages/UploadPage/UploadPageButton.css'
import DefaultImg from "Images/default.jpg"



export const UploadPageForm = ({notificationStateSetter}) => {

	// хук, который занимается загрузкой инпут параметров с сервера
	const { brandState, typeState, buyerState, locationState, isLoading } = useInputParams();

	// Происходит ли отправка формы прямо сейчас
	const [isSubmitting, setIsSubmitting] = useState(false);

	const FORM_FIELDS = {
		item_name: '',
		bought_for: '',
		price: '',
		buyers_part: '',
		sold_for: '',
		size: '',
		buyer: null,
		location: null,
		brand: null,
		type: null,
		images: []
	};

	// стейты со значениями полей
	const [formState, setFormState] = useState(FORM_FIELDS);
	// стейты с ошибками для всех полей
	const [errorState, setErrorState] = useState(
		Object.fromEntries(Object.keys(FORM_FIELDS).map(k => [k, []]))
	);

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
	const handleOnSubmit =  async (event) => {
		event.preventDefault()

		if (isSubmitting) return;
		setIsSubmitting(true);

		if (!validateForm()) return

		const formData = buildFormData()

		try {
			const response = await fetch(Constants.base_server_url + Constants.post_upload, {
			method: Constants.http_methods.POST,
			body: formData,
			});


			const notificationState = response.ok ? UploadNotificationState.SUCCESS: UploadNotificationState.ERROR
			notificationStateSetter(notificationState);
			if (!response.ok) {
				throw new Error(`Ошибка сервера: ${response.status}`);
			}

			const responseJson = await response.json();
			console.log("Успешно отправлено:", responseJson);
			resetForm()


		} catch (error) {
			console.error("Ошибка при загрузке данных:", error);
		} finally {
			setIsSubmitting(false);
		}
	}

	const handleOnErrorChange = (newErrorState) => {
		setErrorState(newErrorState); // Обновляем ошибки разом
	};

	// dfkblfwbz ajhvs
	const validateForm = () => {
		const errorsLocal = UploadFormValidation(
			formState,
			errorState,
			validationMapper
		);

		handleOnErrorChange(errorsLocal);
		return Object.values(errorsLocal).every(
			(errorArray) => errorArray.length === 0
		);
	};

	// компоновка данных для отправки на сервер
	const buildFormData = () => {
		const formData = new FormData();
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

		formState.images.forEach((image, _) => {
			formData.append(Constants.files, image.file);
		});

		FormDataLogger(formData)
		return formData
	}

	// сброс формы
	const resetForm = () => {
		setFormState({
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
		})
		handleOnDeleteAllImages()
	}

	const handleOnChangeInput = (key) => {
		return (event) => {
			if (event && event.target) {
				setFormState((prevState) => ({
						...prevState, [key]: event.target.value}))
				}
		}
	}

	const handleOnChangeDropDown = (key) => {
		return (newVal) => {
			setFormState((prevState) => ({
				...prevState, [key]: newVal}))
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
		formState.images.forEach(img => URL.revokeObjectURL(img.src));
		setFormState(prev => ({ ...prev, images: [] }));
	};

	// удалить конкретное изображения
	const handleOnDeleteSpecificImage = (id) => {
		setFormState(prev => {
			const image = prev.images.find(img => img.id === id);
			if (image) URL.revokeObjectURL(image.src);

			return {
				...prev,
				images: prev.images.filter(img => img.id !== id)
			};
		});
	};

	const urlToFile = async (url, filename, mimeType) => {
		const res = await fetch(url);
		const blob = await res.blob();
		return new File([blob], filename, { type: mimeType });
	  };

	// Автозаполнение всех полей для теста
	const handleOnTestAutofill = async () => {

		const imgFile = await urlToFile(DefaultImg, 'default.jpg', 'image/jpg')
		const imageObject = {
			id: uuidv4(),
			src: DefaultImg,
			file: imgFile,
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
			images: [imageObject]
		});
	};

	if (isLoading) {
		return (
			<div className="catalog-page">
				<p className="centered-text">{"Loading..."}</p>
			</div>
		);
	}

	return (

		<form className="upload-page-form" onSubmit={handleOnSubmit}>

			<ImageManagerWindow		images={formState.images}		errors={errorState.images}	onChange={handleOnChangeImages('images')}	onDelete={handleOnDeleteAllImages} onDeleteSpecific={handleOnDeleteSpecificImage}/>

			<div className="upload-form-inputs">

				<LabeledInput		value={formState.item_name}		errors={errorState.item_name}		onChange={handleOnChangeInput('item_name')}		className="upload-form-item"	labelText="Item Name"	id="item_name_input"	maxLength={50}/>
				<LabeledInput 		value={formState.buyers_part}	errors={errorState.buyers_part}		onChange={handleOnChangeInput('buyers_part')}	className="upload-form-item"	labelText="Buyer Part"	id="buyer_part_input"	maxLength={10}		inputValidator={NumbersOnly}/>
				<LabeledInput 		value={formState.bought_for}	errors={errorState.bought_for}		onChange={handleOnChangeInput('bought_for')}	className="upload-form-item"	labelText="Bought for"	id="bought_for_input"	maxLength={10}		inputValidator={NumbersOnly}/>
				<LabeledInput 		value={formState.price}			errors={errorState.price}			onChange={handleOnChangeInput('price')}			className="upload-form-item"	labelText="Price"		id="price_input"		maxLength={10}		inputValidator={NumbersOnly}/>
				<LabeledInput 		value={formState.sold_for}		errors={errorState.sold_for}		onChange={handleOnChangeInput('sold_for')}		className="upload-form-item"	labelText="Sold for"	id="sold_for_input"		maxLength={10}		inputValidator={NumbersOnly}/>
				<LabeledInput 		value={formState.size}												onChange={handleOnChangeInput('size')}			className="upload-form-item"	labelText="Size"		id="size_input"			maxLength={10}/>
				<LabeledDropdown 	value={formState.brand}			errors={errorState.brand}			onChange={handleOnChangeDropDown('brand')}		className="upload-form-item"	labelText="Brand"		id="brand_dropdown" 	options={brandState}/>
				<LabeledDropdown 	value={formState.type}			errors={errorState.type}			onChange={handleOnChangeDropDown('type')}		className="upload-form-item"	labelText="Type"		id="type_dropdown" 		options={typeState}/>
				<LabeledDropdown 	value={formState.buyer}			errors={errorState.buyer}			onChange={handleOnChangeDropDown('buyer')}		className="upload-form-item"	labelText="Buyer"		id="buyer_dropdown" 	options={buyerState}/>
				<LabeledDropdown	value={formState.location}		errors={errorState.location}		onChange={handleOnChangeDropDown('location')}	className="upload-form-item"	labelText="Location"	id="location_dropdown" 	options={locationState}/>
			</div>

			<DefaultButton className={"upload-page-button"} labelText={'upload'} disabled={isSubmitting} type="submit" onClick={handleOnSubmit}/>

			<DefaultButton labelText={'TEST AUTO FILL'} type="button" onClick={handleOnTestAutofill}/>

		</form>
	)
}
