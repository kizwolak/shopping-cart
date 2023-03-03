import React from "react";
import { Link } from "react-router-dom";

export default function Item(props) {
    return (
        <div className="item">
            <img src={props.image} alt="Product" />
            <Link to={{pathname:`./${props.name}`, state: {props}}}>
                <p className="itemName">{props.name}</p>
            </Link>
            <p className="itemDesc">{props.desc}</p>
            <p className="itemPrice">{props.price} USD</p>
            <div className="item-amount">
                <input type="number" min='1' required id="amount-input" placeholder="0"/>
                <button onClick={props.onClick}>Add item</button>
            </div>
        </div>
    )
}