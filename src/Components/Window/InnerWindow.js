/**
 * Компонент внутренней части базового окна страницы.
 *
 * Props:
 * - className (string): Имя класса для стилей.
 * - children (react component): Компоненты, которые будут отображены во внутренней части окна.
 */
export const InnerWindow = ({className, children}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
