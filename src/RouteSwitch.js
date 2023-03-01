import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Basket from "./components/Basket";
import Item from "./components/Item";

export default function RouteSwitch() {
    const [basket, setBasket] = React.useState(0)
    function handleItemClick() {
      setBasket(prevValue => prevValue + 1);
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
                <Route path="/" element={<App basket={basket} handleClick={handleItemClick} list={list} handleGenerate={generateList}/>} />
                <Route path="/basket" element={<Basket basket={basket}/>} />
            </Routes>
        </BrowserRouter>
    )
}