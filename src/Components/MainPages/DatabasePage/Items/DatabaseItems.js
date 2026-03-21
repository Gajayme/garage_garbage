import { Link } from "react-router-dom";
import { DatabaseItem } from "Components/MainPages/DatabasePage/Items/DatabaseItem.js";
import * as NavigationConstants from "Components/Navigation/Constants";

import "Styles/NoDecorationTextLink.css";
import "Styles/MainPages/DatabasePage/Items/DatabaseItems.css";
import "Styles/CenteredText.css";

export const DatabaseItems = ({ catalogState }) => {
	if (catalogState.length === 0) {
		return <p className="centered-text">Nothing here ...</p>;
	}

	return (
		<div className="catalog-items">
			{catalogState.map((value, index) => {
				const imageSrc = value.images ? value.images[0].image_url : null;
				return (
					<Link
						key={index}
						className="no-decoration-text-link"
						to={`/${NavigationConstants.catalog}/${value.id}`}
					>
						<DatabaseItem
							imageSrc={imageSrc}
							name={value.itemName}
							price={value.price}
						/>
					</Link>
				);
			})}
		</div>
	);
};
