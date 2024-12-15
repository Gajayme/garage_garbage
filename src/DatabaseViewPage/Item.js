
import * as Constants from '../Common/Constants.js'

import "../Styles/DatabaseItem.css"
import "../Styles/Bordered.css"
import DefaultImg from "../Imgs/tshirt_stub.svg"

export const Item = ({img, name, price, adding_date_time}) => {
    return (
        <div className={"bordered-round-2 database-item"}>
            <img src={img ? img : DefaultImg} alt={"item"}/>
            <p title={name}> <strong> {Constants.item_name}: </strong> {name}</p>
            <p title={price}> <strong> {Constants.price}: </strong> {price}</p>
            <p title={adding_date_time}> <strong> {Constants.adding_date_time}: </strong> {adding_date_time}</p>
        </div>
    )
}