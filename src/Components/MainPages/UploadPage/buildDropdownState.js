const convertArrayToMap = (array) =>
	array.reduce((acc, item) => {
		acc[item.title] = item.id;
		return acc;
	}, {});

/** Плейсхолдер + title → id для селекта. */
export const buildDropdownState = (items, chooseLabel, defaultId) => ({
	[chooseLabel]: defaultId,
	...(items ? convertArrayToMap(items) : {}),
});
