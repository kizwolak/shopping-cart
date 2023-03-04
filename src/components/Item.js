import React from "react";
import { Link } from "react-router-dom";

export default function Item(props) {
    const [items, setItems] = React.useState(props.itemsInBasket)
    React.useEffect(() => {setItems(props.itemsInBasket)}, [props.itemsInBasket])
    const [amount, setAmount] = React.useState(1);
    const [isInBasket, setIsInBasket] = React.useState(false);
    function handleChange(e) {
        setAmount(e.target.value);
        console.log(setAmount);
    }
    function handleSubmit(e) {
        const title = e.target.parentNode.parentNode.querySelector(".itemName").textContent
        for (let i = props.itemsInBasket.length - 1; i >= 0; --i) {
            if (props.itemsInBasket[i].title === title) {
                setIsInBasket(true);
            } 
            setTimeout(setIsInBasket(false), 2000)
        }
    }
    return (
        <div className="item">
            <img src={props.image} alt="Product" />
            <Link to={{pathname:`./${props.name}`, state: {props}}}>
                <p className="itemName">{props.name}</p>
            </Link>
            <p className="itemDesc">{props.desc}</p>
            <p className="itemPrice">{props.price} USD</p>
            <div className="item-amount">
                <input type="text" min='1' id="amount-input" value={amount} onChange={handleChange}/>
                <button onClick={(e) => {
                    props.onClick(e);
                    handleSubmit(e);
                }}>Add item</button>
            </div>
            <div className="plus-minus-buttons">
                <div onClick={() => setAmount(prevAmount => prevAmount + 1)}>+</div>
                <div onClick={() => setAmount(prevAmount => prevAmount - 1)}>-</div>
            </div>
            {amount < 1 && <p className="show">You need to insert at least 1 item into the basket!</p>}
            {isInBasket && <p className="show">Item readded to basket.</p>}
        </div>
    )
}