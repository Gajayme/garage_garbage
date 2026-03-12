import { useQuery } from "@tanstack/react-query";
import * as GlobalConstants from "Constants.js";
import { buildQueryString } from "./Utils.js";

export const useCatalogItems = (filtersState) => {
	const fetchItems = async ({ signal }) => {
		const query = buildQueryString(filtersState);
		const url = `${GlobalConstants.base_server_url + GlobalConstants.post_all}?${query}`;

		const resp = await fetch(url, {
			method: GlobalConstants.http_methods.GET,
			headers: { "Content-Type": "application/json" },
			signal,
		});

		if (!resp.ok) throw new Error("Failed to fetch");
		return resp.json();
	};

	const { data, error, isLoading } = useQuery({
		queryKey: [GlobalConstants.itemsQuery, filtersState],
		queryFn: fetchItems,
		keepPreviousData: true,
	});

	return { data, error, isLoading };
};
