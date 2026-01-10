
import { useQuery } from "@tanstack/react-query";

import { ItemImages } from "./ItemImages.js"
import { ItemDescription } from "./ItemDescription.js"
import { buildItemData } from "./Utils.js";

import * as GlobalConstants from "Constants.js";

import "Styles/MainPages/ItemPage/ImagesAndDescriptionWrapper.css"


export const ItemPageContent = ({itemID}) => {

	const fetchItemDetails = async ({ signal }) => {
		const url = `${GlobalConstants.base_server_url + GlobalConstants.post_detail + itemID}`;
		const resp = await fetch(url, {
			method: GlobalConstants.http_methods.GET,
			headers: { "Content-Type": "application/json" },
			signal,
	});

		if (!resp.ok) throw new Error("Failed to fetch");
		return resp.json();
	};

	const {
			data,
			isFetching,
			error
		} = useQuery({
			queryKey: [GlobalConstants.itemDetailsQuery, itemID],
			queryFn: fetchItemDetails,
	});


	if (isFetching) {
		return (
			<div className="catalog-page">
				<p className="centered-text">{"Loading..."}</p>
			</div>
		);
	}

	else if (error) {
		return (
			<div className="catalog-page">
				<p className="centered-text">{"Error while loading item detailes"}</p>
			</div>
		);
	}

	const itemData = buildItemData(data ? data.data: null)
	const images = data ? data.data.images: null

	return (
		<div className="images-and-description-wrapper">
			<ItemImages
				className = "images"
				images = {images}/>

			<ItemDescription
				className = "description"
				data = {itemData}/>
		</div>
	)
}
