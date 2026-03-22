import { useQuery } from "@tanstack/react-query";
import * as GlobalConstants from "Constants.js";
import { useAuth } from "Components/Auth/AuthContext.js";

const fetchDatabaseItemDetails = async ({ queryKey, signal }) => {
	const [, itemID] = queryKey;
	const url = `${GlobalConstants.base_server_url + GlobalConstants.post_detail + itemID}`;
	const resp = await fetch(url, {
		method: GlobalConstants.http_methods.GET,
		headers: { "Content-Type": "application/json" },
		credentials: "include",
		signal,
	});

	if (!resp.ok) {
		const err = new Error("Failed to fetch");
		err.status = resp.status;
		throw err;
	}
	return resp.json();
};

export const useDatabaseItemDetails = (itemID) => {
	const { checkAuth } = useAuth();

	return useQuery({
		queryKey: [GlobalConstants.databaseItemDetailsQuery, itemID],
		queryFn: async (ctx) => {
			try {
				return await fetchDatabaseItemDetails(ctx);
			} catch (e) {
				if (e?.status === 401) {
					await checkAuth();
				}
				throw e;
			}
		},
		enabled: itemID != null && itemID !== "",
	});
};
