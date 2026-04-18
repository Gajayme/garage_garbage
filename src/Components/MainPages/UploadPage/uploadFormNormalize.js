/** Внешний ключ (brand, type, buyer, location): null или целое. */
export const normalizeFk = (v) => {
	if (v == null || v === "") return null;
	const n = typeof v === "number" ? v : parseInt(String(v), 10);
	return Number.isInteger(n) ? n : null;
};

/** Строковые числовые поля для инпутов и parseInt в FormData. */
export const normalizeDigitString = (v) => {
	if (v == null || v === "") return "";
	return String(v);
};

/** Статус — строка для селекта. */
export const normalizeStatus = (v) => {
	if (v == null || v === "") return "";
	return String(v);
};
