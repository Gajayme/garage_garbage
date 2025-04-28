
import "../Styles/ModalWindow.css"


/**
 * Компонент модального окна.
 *
 * Props:
 * TODO
 */
export const ModalWindow = ({itemId, className}) => {
    return (
        <div className={className}>
            <h1>Item id {itemId}</h1>
        </div>
    )
};
