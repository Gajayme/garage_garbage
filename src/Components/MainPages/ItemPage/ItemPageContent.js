
import { useQuery } from "@tanstack/react-query";

import * as GlobalConstants from "Constants.js";


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

	return (
		<p>{data? data.data.itemName : "puk"}</p>
	)
}
