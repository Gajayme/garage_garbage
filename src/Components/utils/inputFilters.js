/**
 * Keystroke-фильтры для CustomInput.
 *
 * Фильтр получает onChange-event и возвращает истинное значение, если
 * новое значение поля допустимо (тогда CustomInput пропустит onChange родителю),
 * либо ложное — чтобы заблокировать ввод.
 *
 * Отличается от валидаций уровня формы (`Validations/`),
 * которые генерируют сообщения об ошибках под полями.
 */

/** Разрешает только цифры (или пустую строку). */
export const NumbersOnly = (event) => {
	const value = event.target.value;
	if (/^\d*$/.test(value))
		return event;
	return null;
};
