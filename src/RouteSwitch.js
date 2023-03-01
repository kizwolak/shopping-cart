import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Basket from "./components/Basket";
import Item from "./components/Item";

export default function RouteSwitch() {
    const [itemsInBasket, setItemsInBasket] = useState([]);
    console.log(itemsInBasket)
    const [basket, setBasket] = React.useState(0)
    function handleItemClick(e) {
      setBasket(prevValue => prevValue + 1);
      console.log(e.target.previousSibling.previousSibling.previousSibling.getAttribute('src'))
      setItemsInBasket(prevBasket => [...prevBasket, 
        {
            img: e.target.previousSibling.previousSibling.previousSibling.getAttribute('src'),
            title: e.target.previousSibling.previousSibling.textContent
        }])
    }
    const [list, setList] = React.useState([
      {
          name:'Chocolate Ship',
          image:'./images/ship.jpg',
          desc:'Don\'t let the perceived size fool you. This choco-ship can take you on voyages around the world, while at the same time making sure you never go hungry at sea. Do NOT eat the integral parts.'
      }
  ])
  const generateList = list.map(item => {
    return <Item name={item.name} image={item.image} desc={item.desc} onClick={handleItemClick} key={item.name}/>
  })
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Shop basket={basket} handleClick={handleItemClick} list={list} handleGenerate={generateList} itemsInBasket={itemsInBasket} handleBasket={setItemsInBasket}/>} />
                <Route path="/basket" element={<Basket basket={basket} itemsInBasket={itemsInBasket}/>} />
            </Routes>
        </BrowserRouter>
    )
}