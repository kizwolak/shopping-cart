import React from "react";
import { Link } from "react-router-dom";

export default function Cart(props) {
  const basket = props.basket;
  return (
    <div className="cart">
      <Link
        to={{ pathname: "/basket", state: { basket } }}
        className="basket-img"
        basket={props.basket}
      >
        <img
          src="./images/shopping-cart-outline-svgrepo-com.svg"
          alt="Shopping cart"
        />
      </Link>
      <p data-testid="basket">{props.basket}</p>
    </div>
  );
}
