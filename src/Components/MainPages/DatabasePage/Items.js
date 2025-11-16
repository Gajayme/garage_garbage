
import {Item} from 'Components/MainPages/DatabasePage/Item';

import DefaultImg from "Images/default.jpg"

export const Items = ({databaseState}) => {

	return (
		<div className="database-items">
			{databaseState.length === 0 ? (
                <p>No uploaded items.</p>
            ) : (
                databaseState.map((value, index) => {
					const img = value.image ? value.image : DefaultImg;
					return (
						<Item key={index} img={img} name={value.itemName} price={value.price}/>
					)
				})
            )}
		</div>
	)
}
