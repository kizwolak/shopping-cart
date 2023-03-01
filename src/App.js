import React from "react";
import Shop from "./components/Shop";
import Item from "./components/Item";
import Basket from "./components/Basket";

export default function App(props) {
  const basket = props.basket
  const list = props.list
  const generateList = props.handleGenerate
  const handleItemClick = props.handleItemClick
  return (
    <div className="app">
      <Shop basket={basket} handleClick={handleItemClick} handleGenerate={generateList} list={list}/>
    </div>
  )
}

