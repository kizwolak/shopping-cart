import React from "react";
import Item from "./Item";
import Navbar from "./Navbar";

export default function Shop() {
    const [list, setList] = React.useState([
        {
            name:'Chocolate Ship',
            image:'./images/ship.jpg',
            desc:'Don\'t let the perceived size fool you. This choco-ship can take you on voyages around the world, while at the same time making sure you never go hungry at sea. Do NOT eat the integral parts.'
        }
    ])
    const [basket, setBasket] = React.useState(0)
    function handleItemClick() {
        setBasket(prevValue => prevValue + 1);
    }
    const generateList = list.map(item => {
        return <Item name={item.name} image={item.image} desc={item.desc} onClick={handleItemClick} key={item.name}/>
    })
    return (
        <div className="main">
            <Navbar basket={basket}/>
            <div className="itemsArea">
                {generateList}
            </div>
        </div>
    )
}