import React from "react";

export default function Cart(props) {
    return (
        <div className="cart">
            <img src="./images/shopping-cart-outline-svgrepo-com.svg" alt="Shopping cart" />
            <p data-testid='basket'>{props.basket}</p>
        </div>
    )
}