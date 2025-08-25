
import "Styles/CenteredWindow.css"


/**
 * Компонент, центрирующий окно по центру экрана.
 * Используется, как обертка над окном, которое мы ходим центрировать
 *
 * @param {React.ReactNode} window - Компонент с окном, который будет отцентрирован.
 */
export const CenteredWindow = ({window}) => {
    return (
        <div className="centered-window">
            {window}
        </div>
    )
}
