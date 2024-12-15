
import React, { useEffect } from 'react';

import {Item} from './Item';

import "../Styles/DatabaseItems.css"

//TODO удалить
import TestImg from './carhartt.png'



export const DatabaseViewPage = () => {

    useEffect(() => {
        console.log('Страница отрендерилась');
    })

    return (
        <div className={"database-items"}>
            <Item img={null} name={"Carhartt jacket"} price={10000} adding_date_time={"1"} />
            <Item img={TestImg} name={"Carhartt jacket"} price={10000} adding_date_time={"1"} />
            <Item img={TestImg} name={"Carhartt"} price={10000} adding_date_time={"1"} />
            <Item img={TestImg} name={"Carhartt jacket"} price={10000} adding_date_time={"1"} />
            <Item img={TestImg} name={"Carhartt jacket"} price={10000} adding_date_time={"1"} />
            <Item img={TestImg} name={"Carhartt jacket"} price={10000} adding_date_time={"1"} />
            <Item img={TestImg} name={"Carhartt jacket black super flex downshifting"} price={10000} adding_date_time={"1"} />
            <Item img={TestImg} name={"Carhartt jacket black"} price={10000} adding_date_time={"1"} />
        </div>
    )
}
