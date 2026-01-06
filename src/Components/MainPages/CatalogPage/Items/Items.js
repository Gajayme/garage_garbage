
import { Link } from "react-router-dom";

import { Item } from 'Components/MainPages/CatalogPage/Items/Item';
import DefaultImg from "Images/default.jpg"

import "Styles/NoTextDecorationLink.css";

export const Items = ({catalogState}) => {
	return (
		<div className="catalog-items">
			{catalogState.length === 0 ? (
				<p className='centered-text'>There are no items here</p>
			) : (
				catalogState.map((value, index) => {
					const img = value.images ? value.images[0].image_url : DefaultImg;
					return (
						<Link
							key={index}
							className="no-text-decoration-link"
							to={`/Database/${value.id}`}>

							<Item
								img={img}
								name={value.itemName}
								price={value.price}/>

						</Link>
					)
				})
			)}
		</div>
	)
}
