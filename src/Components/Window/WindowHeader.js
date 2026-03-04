import { AdminLabel } from './AdminLabel.js';

/**
 * Компонент хедера базового окна страницы.
 *
 * @param {string} className - Имя класса для стилей.
 */
export const WindowHeader = ({ className }) => {
	return (
		<div className={className}>
			<AdminLabel />
		</div>
	);
};
