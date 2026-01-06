
import { Link } from "react-router-dom";

import { Item } from 'Components/MainPages/CatalogPage/Items/Item';
import * as NavigationConstants from "Components/Navigation/Constants";
import DefaultImg from "Images/default.jpg"

import "Styles/NoTextDecorationLink.css";

export const Items = ({catalogState}) => {

	if (catalogState.length === 0) {
		return (
			<div className="catalog-page">
				<p className="centered-text">{"Loading..."}</p>
			</div>
		);
	}

	return (
		<div className="catalog-items"> {
			catalogState.map((value, index) => {
				const img = value.images ? value.images[0].image_url : DefaultImg;
				return (
					<Link
						key={index}
						className="no-text-decoration-link"
						to={`/${NavigationConstants.catalog}/${value.id}`}>

						<Item
							img={img}
							name={value.itemName}
							price={value.price}/>

					</Link>
				)
			})
		} </div>
	)
}
