import React from "react";
import Navbar from "./Navbar";

export default function Basket(props) {
    console.log(props.itemsInBasket);
    const generateItems = props.itemsInBasket.map(item => {
        return (
            <div className="basket-item" key={item.name}>
                <img src={item.img} alt='item' />
                <h4>{item.title}</h4>
                <h2>{item.amount}</h2>
            </div>
        )
    })
    return (
        <div className="basket-main">
            <Navbar basket = {props.basket}/>
            <div className="items">
                {generateItems}
            </div>
        </div>
    )
}