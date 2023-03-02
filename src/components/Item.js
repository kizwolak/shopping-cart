import React from "react";

export default function Item(props) {
    return (
        <div className="item">
            <img src={props.image} alt="Product" />
            <p className="itemName">{props.name}</p>
            <p className="itemDesc">{props.desc}</p>
            <p className="itemPrice">{props.price}</p>
            <div className="item-amount">
                <input type="number" min='1' required/>
                <button onClick={props.onClick}>Add item</button>
            </div>
        </div>
    )
}