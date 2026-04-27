/**
 * Утилиты для работы с превью изображений формы загрузки.
 *
 * В формате `{ id, src, file }` поле `src` бывает двух видов:
 *  - blob-URL (`blob:…`) — если картинку только что добавил пользователь, и
 *    мы аллоцировали URL через `URL.createObjectURL(file)`. Такие URL живут
 *    в браузере до явного `URL.revokeObjectURL` и без ревока текут в память.
 *  - https-URL (S3 и т.п.) — если картинка пришла с бэкенда при гидрации
 *    edit-режима. Ревокать его не нужно и нельзя — это не наш ресурс.
 *
 * Хелперы ниже инкапсулируют различение этих двух случаев, чтобы потребители
 * не повторяли проверку `src.startsWith("blob:")` в каждом месте удаления.
 */

const isBlobImage = (img) =>
	typeof img?.src === "string" && img.src.startsWith("blob:");

/** Освободить blob-URL у одного изображения, если он локальный. */
export const revokeBlobImage = (img) => {
	if (isBlobImage(img)) URL.revokeObjectURL(img.src);
};

/** Освободить blob-URLs у списка изображений. Безопасно для пустых/невалидных входов. */
export const revokeBlobImages = (images) => {
	if (!Array.isArray(images)) return;
	images.forEach(revokeBlobImage);
};
