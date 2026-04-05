
/**
 * Кнопка с подписью и иконкой, переключаемой по `isActive` (два `src`).
 * Любые дополнительные пропсы из `...props` передаются на корневой `<button>` (после явных полей).
 *
 * @param {string} [labelText] — видимая подпись; если есть, иконка считается декоративной (пустой alt).
 * @param {string} className — класс `<button>`.
 * @param {string} [iconClassName] — класс `<img>` иконки.
 * @param {string} iconInactive — src иконки в «свёрнутом» состоянии (`isActive === false`).
 * @param {string} iconActive — src иконки в «развёрнутом» состоянии (`isActive === true`).
 * @param {"button" | "submit" | "reset"} [type="button"] — тип кнопки.
 * @param {Function} [onClick] — обработчик клика.
 * @param {string} [altImg="icon"] — alt иконки, если нет `labelText` (только иконка).
 * @param {boolean} [isActive=false] — какое изображение показывать; при `disclosure` же значение уходит в `aria-expanded`.
 * @param {boolean} [disclosure=false] — если true, на кнопку вешается `aria-expanded` для раскрывающегося блока.
 * @param {boolean} [disabled=false] — неактивное состояние.
 */
export const ToggleIconButton = ({
	labelText,
	className,
	iconClassName,
	iconInactive,
	iconActive,
	type = "button",
	onClick,
	altImg = "icon",
	isActive = false,
	disclosure = false,
	disabled = false,
	...props
}) => {
	const hasVisibleLabel = Boolean(labelText);

	return (
		<button
			{...props}
			type={type}
			className={className}
			onClick={onClick}
			disabled={disabled}
			aria-expanded={disclosure ? isActive : undefined}
		>
			{hasVisibleLabel ? <span>{labelText}</span> : null}
			<img
				className={iconClassName}
				src={isActive ? iconActive : iconInactive}
				alt={hasVisibleLabel ? "" : altImg}
				{...(hasVisibleLabel ? { "aria-hidden": true } : {})}
			/>
		</button>
	);
};
