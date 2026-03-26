import { useQuery } from "@tanstack/react-query";
import * as GlobalConstants from "Constants.js";
import { useAuth } from "Components/Auth/AuthContext.js";
import { fetchItemDetails } from "Components/Api/fetchItemDetails.js";

const fetchDatabaseItemDetails = async ({ queryKey, signal }) => {
	const [, itemID] = queryKey;
	return fetchItemDetails({
		endpointPath: GlobalConstants.post_detail_private,
		itemID,
		signal,
	});
};

export const useDatabaseItemDetails = (itemID) => {
	const { checkAuth } = useAuth();

	return useQuery({
		queryKey: [GlobalConstants.itemDetailsPrivateQueryKey, itemID],

		// проверяем, авторизован ли пользователь
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
