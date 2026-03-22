

export const buildItemData = (data) => {
	if (!data || typeof data !== "object") return null;

	if (
		data.itemName === undefined ||
		data.size === undefined ||
		data.price === undefined
	) {
		return null;
	}

	return {
		title: data.itemName,
		restData: {
			size: data.size,
			price: data.price,
		}
	}
}
