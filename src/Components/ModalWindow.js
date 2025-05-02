
import "../Styles/ModalWindow.css"
import { DefaultButton } from "./Button.js"
import * as Constants from "../Constants";
import {post_delete} from "../Constants";

/**
 * Компонент модального окна.
 *
 * Props:
 * TODO
 */
export const ModalWindow = ({itemId, className}) => {

    const handleOnTestAutofill = () => {
        fetch(Constants.base_server_url + post_delete, {
            method: Constants.http_methods.DELETE,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "post_id": itemId,
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Ошибка:', error));


    }


    return (
        <div className={className}>
            <h1>Item id {itemId}</h1>
            <DefaultButton labelText={'DELETE ITEM'} type="button" onClick={handleOnTestAutofill}/>

        </div>
    )
};
