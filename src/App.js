import React from "react";
import Shop from "./components/Shop";
import Item from "./components/Item";
import Basket from "./components/Basket";

export default function App() {
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
    <div className="app">
      <Shop basket={basket} handleClick={handleItemClick} handleGenerate={generateList} list={list}/>
      <Basket basket={basket} />
    </div>
  )
}

