import React from "react";
import Cart from "./Cart";

export default function Navbar(props) {
    return (
        <div className="navbar">
            <p className="title">The Big Shop</p>
            <Cart basket={props.basket}/>
        </div>
    )
}