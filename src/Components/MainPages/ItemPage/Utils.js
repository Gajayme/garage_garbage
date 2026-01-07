

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
		name: [data.itemName, false],
		size: [data.size, true],
		price: [data.price, true],
	}
}
