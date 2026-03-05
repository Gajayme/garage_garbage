
/**
 * Компонент хедера базового окна страницы.
 *
 * @param {string} className - Имя класса для стилей.
 * @param {boolean} isAdmin - Показывать ли текст "admin" справа для авторизованного пользователя.
 */
export const WindowHeader = ({ className, isAdmin }) => {
	return (
		<div className={className}>
			{isAdmin && <span className="window-header__admin">admin</span>}
		</div>
	);
};
