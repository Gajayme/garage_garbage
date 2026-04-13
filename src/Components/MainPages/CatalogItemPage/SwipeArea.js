import { useRef } from "react";

/**
 * Обёртка, которая распознаёт горизонтальный свайп на тач-устройствах и вызывает колбэки.
 * Не мешает вертикальному скроллу: игнорирует жесты, где вертикальная компонента доминирует.
 *
 * @param {object} props
 * @param {import("react").ReactNode} props.children — контент внутри зоны свайпа.
 * @param {string} [props.className] — CSS-класс корневого контейнера.
 * @param {number} [props.minDistance=50] — минимальная длина свайпа по X в px.
 * @param {number} [props.maxVertical=40] — максимальное допустимое отклонение по Y в px
 *   (при превышении и доминировании по Y жест считается скроллом и игнорируется).
 * @param {number} [props.maxDurationMs=700] — максимальная длительность жеста в мс.
 * @param {() => void} [props.onSwipeLeft] — вызывается при свайпе влево (dx < 0).
 * @param {() => void} [props.onSwipeRight] — вызывается при свайпе вправо (dx > 0).
 */
export const SwipeArea = ({
	children,
	className,
	minDistance = 50,
	maxVertical = 40,
	maxDurationMs = 700,
	onSwipeLeft,
	onSwipeRight,
}) => {
	const touchStartRef = useRef(null);

	const handleTouchStart = (event) => {
		const touch = event.touches?.[0];
		if (!touch) return;
		touchStartRef.current = {
			x: touch.clientX,
			y: touch.clientY,
			at: Date.now(),
		};
	};

	const handleTouchEnd = (event) => {
		const start = touchStartRef.current;
		touchStartRef.current = null;
		const endTouch = event.changedTouches?.[0];
		if (!start || !endTouch) return;

		const dx = endTouch.clientX - start.x;
		const dy = endTouch.clientY - start.y;
		const absX = Math.abs(dx);
		const absY = Math.abs(dy);
		const dt = Date.now() - start.at;

		if (dt > maxDurationMs) return;
		if (absX < minDistance) return;
		if (absY > maxVertical && absY > absX) return;

		if (dx < 0) onSwipeLeft?.();
		else onSwipeRight?.();
	};

	return (
		<div
			className={className}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
		>
			{children}
		</div>
	);
};

