import React from "react";
import Navbar from "./Navbar";

export default function Basket(props) {
    return (
        <div className="basket-main">
            <Navbar basket = {props.basket}/>
        </div>
    )
}