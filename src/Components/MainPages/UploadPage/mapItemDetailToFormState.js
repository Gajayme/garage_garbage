import { v4 as uuidv4 } from "uuid";

import {
	normalizeDigitString,
	normalizeFk,
	normalizeStatus,
} from "Components/MainPages/UploadPage/uploadFormNormalize.js";

const urlToFile = async (url, filename, mimeType) => {
	const res = await fetch(url);
	if (!res.ok) {
		throw new Error(`Failed to fetch image: ${res.status}`);
	}
	const blob = await res.blob();
	const type = mimeType || blob.type || "image/jpeg";
	return new File([blob], filename, { type });
};

/**
 * Синхронная часть полей формы из объекта вещи API (data внутри ответа detail).
 * @param {object} d
 */
export const mapItemDetailFields = (d) => {
	if (!d || typeof d !== "object") {
		return {
			item_name: "",
			bought_for: "",
			price: "",
			buyers_part: "",
			sold_for: "",
			size: "",
			buyer: null,
			location: null,
			brand: null,
			type: null,
			status: null,
		};
	}

	return {
		item_name: d.itemName != null ? String(d.itemName) : "",
		bought_for: normalizeDigitString(d.boughtFor),
		price: normalizeDigitString(d.price),
		buyers_part: normalizeDigitString(d.buyersPart),
		sold_for: normalizeDigitString(d.soldFor),
		size: d.size != null && d.size !== "" ? String(d.size) : "",
		buyer: normalizeFk(d.buyerId ?? d.buyer),
		location: normalizeFk(d.locationId ?? d.location),
		brand: normalizeFk(d.brandId ?? d.brand),
		type: normalizeFk(d.typeId ?? d.type),
		status: normalizeStatus(d.status) || null,
	};
};

/**
 * Картинки из detail.images → элементы формы { id, src, file }.
 */
export const mapDetailImagesToFormImages = async (images) => {
	if (!Array.isArray(images) || images.length === 0) return [];

	const out = [];
	let index = 0;
	for (const img of images) {
		const url = img?.image_url;
		if (!url || typeof url !== "string") continue;
		const extMatch = url.split("?")[0].match(/\.([a-zA-Z0-9]+)$/);
		const ext = extMatch ? extMatch[1] : "jpg";
		const file = await urlToFile(url, `existing-${index}.${ext}`, "image/jpeg");
		out.push({
			id: uuidv4(),
			src: url,
			file,
		});
		index += 1;
	}
	return out;
};
