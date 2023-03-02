import React from "react";
import Navbar from "./Navbar";

export default function ItemDisplay(props) {
    const basket = props.basket
    return (
        <>
            <Navbar basket={basket} />
            <div className="item-display">
                <img src={props.item.image} alt='item' />
                <div className="item-display-desc">
                    <h1>{props.item.name}</h1>
                    <p>{props.item.desc}</p>
                    <div className="basket-interaction">
                        <p className="itemPrice">{props.item.price} USD</p>
                        <div className="item-amount">
                        <input type="number" min='1' required id="amount-input"/>
                        <button onClick={props.onClick}>Add item</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}