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
      console.log(e.target.parentNode.parentNode.querySelector('.itemName').textContent)
      setItemsInBasket(prevBasket => [...prevBasket, 
        {
            img: e.target.parentNode.parentNode.querySelector('img').getAttribute('src'),
            title: e.target.parentNode.parentNode.querySelector('.itemName').textContent,
            amount: e.target.parentNode.querySelector('input').value,
        }])
    }
    const [list, setList] = React.useState([
      {
          name:'Chocolate Ship',
          image:'./images/ship.jpg',
        //   from https://baxtermurray.co.uk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/h/ship_v2.jpg
          desc:'Don\'t let the perceived size fool you. This choco-ship can take you on voyages around the world, while at the same time making sure you never go hungry at sea. Do NOT eat the integral parts.',
          price:'100 million USD'
        },
      {
        name:'Golden Gate Bridge',
        image:'./images/GoldenGateBridge-001.jpg',
        // photo by Rich Niewiroski Jr.
        desc:'This bridge is a landmark of the beautiful city of San Francisco. Now you can buy it and have it all for yourself. We accept credit cards and cheques.',
        price:'50 billion USD'
      },
      {
        name:'Magical Mystery Tour',
        image:'./images/beatles.webp',
        // from https://media.revistagq.com/photos/63a85e4289428527874457de/16:9/w_1280,c_limit/beatles.jpeg
        desc:'The Beatles are back. The hard work of our necromancers has resulted in bringing back all of the Beatles and convincing them to start an actual Magical Mystery Tour. You will travel around the most beautiful spots in the UK - Hull, Grimsby, Luton and Rhyl - and have the time of your life with the greatest band ever.',
        price:'500,000 USD'
      },
  ])
  const generateList = list.map(item => {
    return <Item name={item.name} image={item.image} desc={item.desc} price={item.price} onClick={handleItemClick} key={item.name}/>
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