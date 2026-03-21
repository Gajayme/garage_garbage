import { useQuery } from "@tanstack/react-query";
import * as GlobalConstants from "Constants.js";

const fetchItemDetails = async ({ queryKey, signal }) => {
	const [, itemID] = queryKey;
	const url = `${GlobalConstants.base_server_url + GlobalConstants.post_detail + itemID}`;
	const resp = await fetch(url, {
		method: GlobalConstants.http_methods.GET,
		headers: { "Content-Type": "application/json" },
		signal,
	});

	if (!resp.ok) throw new Error("Failed to fetch");
	return resp.json();
};

export const useItemDetails = (itemID) => {
	return useQuery({
		queryKey: [GlobalConstants.itemDetailsQuery, itemID],
		queryFn: fetchItemDetails,
	});
};
