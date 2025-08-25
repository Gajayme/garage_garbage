
/**
 * Компонент внутренней части базового окна страницы.
 *
 * @param {string} className - Имя класса для стилей.
 * @param {React.ReactNode} children - Компоненты, которые будут отображены во внутренней части окна.
 */
export const InnerWindow = ({className, children}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
