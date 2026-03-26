import * as GlobalConstants from "Constants.js";

/**
 * Общий запрос на получение данных о вещи.
 * Использует переданный endpoint из Constants.js (`post_detail` или `post_detail_private`).
 *
 * @param {{
 * 	endpointPath: string,
 * 	itemID: string|number,
 * 	signal?: AbortSignal
 * }} params
 */
export const fetchItemDetails = async ({ endpointPath, itemID, signal }) => {
	// endpointPath обычно уже содержит trailing slash: "post/detail/".
	const path = `${endpointPath}${itemID}`;

	const url = `${GlobalConstants.base_server_url}${path}`;

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

