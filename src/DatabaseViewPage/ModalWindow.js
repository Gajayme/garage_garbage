
import "../Styles/ModalWindow.css"


export const ModalWindow = ({itemId, className}) => {
    return (
        <div className={className}>
            <h1>Item id {itemId}</h1>
        </div>
    )
};
