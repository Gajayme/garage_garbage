/**
 * Компонент слоя навигационных кнопок страницы.
 *
 * Props:
 * - className (string): Имя класса для стилей.
 * - children (react component): Компоненты, которые будут отображены внутри слоя (предполагается что это будут кнопки).
 */
export const ButtonLayer = ({className, children}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
