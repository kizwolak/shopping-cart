import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";

export default function Basket(props) {
    const generateItems = props.itemsInBasket.map(item => {
        return (
            <div className="basket-item" key={item.name}>
                <img src={item.img} alt='item' />
                <div className="item-in-basket">
                    <h4>{item.title}</h4>
                    <h2>Quantity: {item.amount}</h2>
                    <div onClick={props.handleDelete} className='delete-button'>❌ Remove from basket</div>
                </div>
            </div>
        )
    })
    return (
        <div className="all-basket">
            <Navbar basket = {props.basket}/>
            <div className="basket-checkout">
                <div className="basket-main">
                    <Link to={{pathname:`/`}}>
                        <p className="shop-link">← Go back to the main page</p>
                    </Link>
                    {props.itemsInBasket.length < 1 && <h1 className="empty-basket">The basket is empty - come on, go add something!</h1>} 
                    <div className="items">
                        {generateItems}
                    </div>
                    <p className="basket-total">Total: {props.totalAmount} USD</p>
                </div>
                <Checkout />
            </div>
        </div>
    )
}