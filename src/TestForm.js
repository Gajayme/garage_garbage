import { useState } from "react"
import MyButton from "./MyButton.js"
import MyInput from "./MyInput.js"
import MyTextArea from "./MyTextArea.js"
import MyDropdown from "./MyDropDown.js"




export const TestForm = () => {
	const [formState, setFormState] = useState({
		item_name: '',
		bought_for: '',
		price: '',
		buyers_part: '',
		sold_for: '',
		size: '',
		//buyer: '',
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

	// const handleOptionClick = (option) => {
	// 	setSelectedOption(option);
	// 	setIsOpen(false); // Закрываем дропдаун после выбора
	// };

	// // TODO собрать все пропсы отдельно, а потом декомпозировать
	// const buyerOptions = ['Rail', 'Igor', 'Gosha', 'Oleg'];

	return (
		<form onSubmit={handleOnSubmit}>
			<MyTextArea label="Item name" placeholder="enter text" id="textArea_1" rows='2' cols='30' value={formState.item_name} onChange={handleOnChange('item_name')} />

			<MyInput label="Buyers part" value={formState.name} onChange={handleOnChange('buyers_part')} id="input_1"/>
			<MyInput label="Bought for" value={formState.bought_for} onChange={handleOnChange('bought_for')} id="input_2" />
			<MyInput label="Price" value={formState.price} onChange={handleOnChange('price')} id="input_3" />
			<MyInput label="Sold For" value={formState.sold_for} onChange={handleOnChange('sold_for')} id="input_4" />
			<MyInput label="Size" value={formState.size} onChange={handleOnChange('size')} id="input_5" />

			{/* <MyDropdown const options={buyerOptions} value={formState.buyer} onChange={handleOnChange('buyer')} />; */}

			<MyButton labelText={'Add to database'}  onClick={handleOnSubmit}/>
		</form>
	)
}
