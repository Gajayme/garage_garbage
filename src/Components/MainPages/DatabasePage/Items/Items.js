
import {Item} from 'Components/MainPages/DatabasePage/Items/Item';
import DefaultImg from "Images/default.jpg"
import * as Constants from "Components/MainPages/DatabasePage/Constants.js"

export const Items = ({databaseState}) => {
	return (
		<div className="database-items">
			{databaseState.length === 0 ? (
				<p className='centered-text'>{Constants.noItems}</p>
			) : (
				databaseState.map((value, index) => {
					const img = value.images ? value.images[0].image_url : DefaultImg;
					return (
						<Item key={index} img={img} name={value.itemName} price={value.price}/>
					)
				})
			)}
		</div>
	)
}
