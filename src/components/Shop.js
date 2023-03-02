import React from "react";
import Navbar from "./Navbar";

export default function Shop(props) {
    const basket = props.basket
    const generateList = props.handleGenerate
    return (
        <div className="main">
            <Navbar basket={basket}/>
            <div className="itemsArea">
                {generateList}
            </div>
        </div>
    )
}