import * as Constants from "Constants.js";

/** GET по относительному `path`, ответ — поле `data` из JSON. */
export async function fetchInputData(path) {
	const url = `${Constants.base_server_url}${path}`;
	const resp = await fetch(url);
	if (!resp.ok) throw new Error("Ошибка загрузки");
	const data = await resp.json();
	return data.data;
}
