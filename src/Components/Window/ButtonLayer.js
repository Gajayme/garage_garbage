/**
 * Компонент слоя навигационных кнопок страницы.
 *
 * Props:
 * - className (string): Имя класса для стилей.
 */
export const ButtonLayer = ({className, children}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
