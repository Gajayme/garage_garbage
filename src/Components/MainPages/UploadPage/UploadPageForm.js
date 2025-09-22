import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';

import { DefaultButton } from "Components/Button.js"
import {LabeledInput} from "Components/MainPages/UploadPage/LabeledInput.js"
import {LabeledDropdown} from "Components/MainPages/UploadPage/LabeledDropDown.js"
import {ImageManagerWindow} from "./ImageManager/ImageManagerWindow.js"
import {NumbersOnly} from './Validations/Validations.js'
import {NonEmpty, NonEmptyImages} from './Validations/Validations.js'
import {UploadFormValidation} from './Validations/Validations.js'
import * as Constants from 'Constants.js'
import * as UploadConstants from './UploadPageConstants.js'


import 'Styles/MainPages/UploadPage/UploadPageForm.css'
import 'Styles/MainPages/UploadPage/UploadPageButton.css'
import 'Styles/MarginBottom.css'
import DefaultImg from "Images/tshirt_stub.svg"



export const UploadPageForm = () => {

	// стейты с брендами, получаемыми от сервера
	const [brandState, setBrandState] = useState({
		[UploadConstants.chooseBrand]: UploadConstants.defaultID
	})

	// стейты с типами вещей, получаемыми от сервера
	const [typeState, setTypeState] = useState({
		[UploadConstants.chooseType]: UploadConstants.defaultID
	})

	// стейты с приобретателями вещей, получаемыми от сервера
	const [buyerState, setBuyerState] = useState({
		[UploadConstants.chooseBuyer]: UploadConstants.defaultID
	})

	// стейты с местонахождением вещиейч, получаемыми от сервера
	const [locationState, setLocationState] = useState({
		[UploadConstants.chooseLocation]: UploadConstants.defaultID
	})


	const updateBrands = (brandsData) => {

		const brandsObj = brandsData.reduce((acc, brand) => {
			acc[brand.title] = brand.id;
			return acc;
		  }, {});

		setBrandState((prevState) => ({
			...prevState, ...brandsObj})
		)
	}

	const updateTypes = (typesData) => {

		const typesObj = typesData.reduce((acc, type) => {
			acc[type.title] = type.id;
			return acc;
		  }, {});

		setTypeState((prevState) => ({
			...prevState, ...typesObj})
		)
	}

	const updateByuers = (byuersData) => {

		const byuersObj = byuersData.reduce((acc, byuer) => {
			acc[byuer.title] = byuer.id;
			return acc;
		  }, {});

		setBuyerState((prevState) => ({
			...prevState, ...byuersObj})
		)
	}

	const updateLocations = (locationsData) => {

		const locationsObj = locationsData.reduce((acc, location) => {
			acc[location.title] = location.id;
			return acc;
		  }, {});

		setLocationState((prevState) => ({
			...prevState, ...locationsObj})
		)
	}

	useEffect(() => {
		const loadData = async () => {
			try {
				const [brandsResponse, typesResponse, byuersResponce, locationsResponce] = await Promise.all([
					fetch(UploadConstants.baseApi + UploadConstants.brandApi),
					fetch(UploadConstants.baseApi + UploadConstants.typeApi),
					fetch(UploadConstants.baseApi + UploadConstants.byuerApi),
					fetch(UploadConstants.baseApi + UploadConstants.locationApi),
				]);

				const brandsData = await brandsResponse.json();
				const typesData = await typesResponse.json();
				const byuersData = await byuersResponce.json();
				const locationsData = await locationsResponce.json();

				updateBrands(brandsData.data);
				updateTypes(typesData.data);
				updateByuers(byuersData.data);
				updateLocations(locationsData.data);

			} catch (error) {
				console.error('Ошибка при получении данных:', error);
			}
		};

		loadData();
	  }, []);


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
		console.log("brand state: ", brandState)
		console.log("type state: ", typeState)
		console.log("byuer state: ", buyerState)
		console.log("location state: ", locationState)


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
				<LabeledDropdown 	value={formState.brand}			errors={errorState.brand}			onChange={handleOnChange('brand')}			className="upload-form-item"	labelText="Brand"		id="brand_dropdown" 	options={brandState}/>
				<LabeledDropdown 	value={formState.type}			errors={errorState.type}			onChange={handleOnChange('type')}			className="upload-form-item"	labelText="Type"		id="type_dropdown" 		options={typeState}/>
				<LabeledDropdown 	value={formState.buyer}			errors={errorState.buyer}			onChange={handleOnChange('buyer')}			className="upload-form-item"	labelText="Buyer"		id="buyer_dropdown" 	options={buyerState}/>
				<LabeledDropdown	value={formState.location}		errors={errorState.location}		onChange={handleOnChange('location')}		className="upload-form-item"	labelText="Location"	id="location_dropdown" 	options={locationState}/>
			</div>

			<DefaultButton className={"upload-page-button"} labelText={'upload'} type="submit" onClick={handleOnSubmit}/>

			<DefaultButton labelText={'TEST AUTO FILL'} type="button" onClick={handleOnTestAutofill}/>

		</form>
	)
}
