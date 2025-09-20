
import {Item} from 'Components/MainPages/DatabasePage/Item';

import DefaultImg from "Images/сложенная-пустая-одежда-на-белом-фоне-329728970.webp"

export const Items = ({databaseState}) => {

	const onClick = () => {
        console.log("clicked");
    }

	return (

		<div className="database-items">
			<Item img={DefaultImg} name={"Super Item"} price={"999"} onClick={onClick}/>
			<Item img={DefaultImg} name={"Super Item"} price={"999"} onClick={onClick}/>
			<Item img={DefaultImg} name={"Super Item"} price={"999"} onClick={onClick}/>
			<Item img={DefaultImg} name={"Super Item"} price={"999"} onClick={onClick}/>
			<Item img={DefaultImg} name={"Super Item"} price={"999"} onClick={onClick}/>
			<Item img={DefaultImg} name={"Super Item"} price={"999"} onClick={onClick}/>
			<Item img={DefaultImg} name={"Super Item"} price={"999"} onClick={onClick}/>
			<Item img={DefaultImg} name={"Super Item"} price={"999"} onClick={onClick}/>
		</div>
	)
}
