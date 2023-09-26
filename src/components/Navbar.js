import React from "react";
import Cart from "./Cart";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <h1>The Luxurious</h1>
      <Cart basket={props.basket} />
    </div>
  );
}
