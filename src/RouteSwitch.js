import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Basket from "./components/Basket";
import Item from "./components/Item";
import ItemDisplay from "./components/ItemDisplay";

export default function RouteSwitch() {
  const [itemsInBasket, setItemsInBasket] = useState([]);
  const [basket, setBasket] = React.useState(0);
  const [totalAmount, setTotalAmount] = React.useState(0);
  function handleItemClick(e) {
    const amount = e.target.parentNode.querySelector("input").value;
    setBasket((prevValue) => prevValue + 1);
    const priceToBeSet =
      e.target.parentNode.parentNode.querySelector(".itemPrice").textContent;
    const itemToBeAdded = {
      img: e.target.parentNode.parentNode
        .querySelector("img")
        .getAttribute("src"),
      title:
        e.target.parentNode.parentNode.querySelector(".itemName").textContent,
      amount: amount,
      price: priceToBeSet.substring(0, priceToBeSet.indexOf(" ")),
    };
    for (let i = itemsInBasket.length - 1; i >= 0; --i) {
      if (itemsInBasket[i].title === itemToBeAdded.title) {
        const removedPrice = itemsInBasket[i].price;
        const removedAmount = itemsInBasket[i].amount;
        setTotalAmount(
          (prevAmount) =>
            prevAmount - removedPrice * removedAmount
        );
        itemsInBasket.splice(i, 1);
        setBasket((prevValue) => prevValue - 1);
      }
    }
    setItemsInBasket((prevBasket) => [...prevBasket, itemToBeAdded]);
    setTotalAmount(
      (prevAmount) =>
        prevAmount +
        priceToBeSet.substring(0, priceToBeSet.indexOf(" ")) * amount
    );
    e.target.parentNode.parentNode.querySelector("input").value = 0;
  }
  function handleItemDisplayClick(e) {
    const amount = e.target.parentNode.parentNode.querySelector("input").value;
    const priceToBeSet =
      e.target.parentNode.parentNode.querySelector(".itemPrice").textContent;
    const itemToBeAdded = {
      img: e.target.parentNode.parentNode.parentNode.parentNode
        .querySelector("img")
        .getAttribute("src"),
      title:
        e.target.parentNode.parentNode.parentNode.querySelector("h1")
          .textContent,
      amount: e.target.parentNode.parentNode.querySelector("input").value,
      price: priceToBeSet.substring(0, priceToBeSet.indexOf(" ")),
    };
    for (let i = itemsInBasket.length - 1; i >= 0; --i) {
      if (itemsInBasket[i].title === itemToBeAdded.title) {
        const removedPrice = itemsInBasket[i].price;
        const removedAmount = itemsInBasket[i].amount;
        setTotalAmount(
          (prevAmount) =>
            prevAmount - removedPrice * removedAmount
        );
        itemsInBasket.splice(i, 1);
        setBasket((prevValue) => prevValue - 1);
      }
    }
    setItemsInBasket((prevBasket) => [...prevBasket, itemToBeAdded]);
    setTotalAmount(
      (prevAmount) =>
        prevAmount +
        priceToBeSet.substring(0, priceToBeSet.indexOf(" ")) * amount
    );
    e.target.parentNode.parentNode.querySelector("input").value = 0;
  }
  const [list, setList] = React.useState([
    {
      name: "Chocolate Ship",
      image: "./images/ship.jpg",
      //   from https://baxtermurray.co.uk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/h/ship_v2.jpg
      desc: "Don't let the perceived size fool you. This choco-ship can take you on voyages around the world, while at the same time making sure you never go hungry at sea. Do NOT eat the integral parts.",
      price: 100000000,
    },
    {
      name: "Golden Gate Bridge",
      image: "./images/GoldenGateBridge-001.jpg",
      // photo by Rich Niewiroski Jr.
      desc: "This bridge is a landmark of the beautiful city of San Francisco. Now you can buy it and have it all for yourself. Own the most iconic bridge in the world.",
      price: 50000000000,
    },
    {
      name: "Magical Mystery Tour",
      image: "./images/beatles.webp",
      // from https://media.revistagq.com/photos/63a85e4289428527874457de/16:9/w_1280,c_limit/beatles.jpeg
      desc: "The Beatles are back. The hard work of our necromancers has resulted in bringing back all of the Beatles and convincing them to start an actual Magical Mystery Tour. You will travel around the most beautiful spots in the UK - Hull, Grimsby, Luton and Rhyl - and have the time of your life with the greatest band ever.",
      price: 500000,
    },
    {
      name: "Command Center",
      image: "./images/cc.jpg",
      // from StarCraft: Brood War
      desc: "A Terran Command Center, which allows you to produce SCVs for the low price of 50 minerals. Starting minerals or SCVs not included.",
      price: 10000000,
    },
    {
      name: "The Briefcase",
      image: "./images/briefcase.webp",
      // from https://mediaproxy.snopes.com/width/1200/height/1200/https://media.snopes.com/2016/03/briefcase.gif
      desc: "The most desired briefcase in all of Los Angeles. What is inside? This is your time to find out. Personally presented by Samuel L. Jackson on receival.",
      price: 5000000,
    },
    {
      name: "Blonk",
      image: "./images/blonk.jpg",
      // from https://www.cubbitantiques.co.uk/upload/images/shopprod/10338/abstract-bronze-sculpture_10338_main_size3.jpg
      desc: "The Blonk is an object that can help you fulfill your deepest desires. It is everything you ever needed. It is everything you always wanted. Blonk.",
      price: 1000000,
    },
    {
      name: "A no-hole strainer",
      image: "./images/pot.jpg",
      // from https://cdnimg.webstaurantstore.com/images/products/large/389202/2226368.jpg
      desc: "A strainer without holes. Now you can pour water with contents inside into a container AND keep the water inside. A must-have for your kitchen.",
      price: 3000,
    },
    {
      name: "Maluch",
      image: "./images/Polski_Fiat_126p_rocznik_1973.jpg",
      // By P-szat - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=5337442
      desc: "The peak of Polish-Italian engineering. 1000 hp, 0-100 in 4.6 seconds, integration with Wi-Fi and a battery with a capacity for 1000 km on a single charge. Any questions?",
      price: 250000,
    },
  ]);
  const generateList = list.map((item) => {
    return (
      <Item
        name={item.name}
        image={item.image}
        desc={item.desc}
        price={item.price}
        onClick={handleItemClick}
        key={item.name}
        itemsInBasket={itemsInBasket}
      />
    );
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Shop
              basket={basket}
              handleClick={handleItemClick}
              list={list}
              handleGenerate={generateList}
              itemsInBasket={itemsInBasket}
              handleBasket={setItemsInBasket}
            />
          }
        />
        <Route
          path="/basket"
          element={
            <Basket
              basket={basket}
              itemsInBasket={itemsInBasket}
              totalAmount={totalAmount}
            />
          }
        />
        <Route
          path="/Chocolate Ship"
          element={
            <ItemDisplay
              item={list[0]}
              basket={basket}
              onClick={handleItemDisplayClick}
              totalAmount={totalAmount}
            />
          }
        />
        <Route
          path="/Golden Gate Bridge"
          element={
            <ItemDisplay
              item={list[1]}
              basket={basket}
              onClick={handleItemDisplayClick}
              totalAmount={totalAmount}
            />
          }
        />
        <Route
          path="/Magical Mystery Tour"
          element={
            <ItemDisplay
              item={list[2]}
              basket={basket}
              onClick={handleItemDisplayClick}
              totalAmount={totalAmount}
            />
          }
        />
        <Route
          path="/Command Center"
          element={
            <ItemDisplay
              item={list[3]}
              basket={basket}
              onClick={handleItemDisplayClick}
              totalAmount={totalAmount}
            />
          }
        />
        <Route
          path="/The Briefcase"
          element={
            <ItemDisplay
              item={list[4]}
              basket={basket}
              onClick={handleItemDisplayClick}
              totalAmount={totalAmount}
            />
          }
        />
        <Route
          path="/Blonk"
          element={
            <ItemDisplay
              item={list[5]}
              basket={basket}
              onClick={handleItemDisplayClick}
              totalAmount={totalAmount}
            />
          }
        />
        <Route
          path="/A no-hole strainer"
          element={
            <ItemDisplay
              item={list[6]}
              basket={basket}
              onClick={handleItemDisplayClick}
              totalAmount={totalAmount}
            />
          }
        />
        <Route
          path="/Maluch"
          element={
            <ItemDisplay
              item={list[7]}
              basket={basket}
              onClick={handleItemDisplayClick}
              totalAmount={totalAmount}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
