import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [menu, setMenu] = useState([]);
  const [money, setMoney] = useState(100);

  // Populate menu from server
  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(sushis =>
        sushis.map(sushi => {
          return { ...sushi, eaten: false };
        })
      )
      .then(setMenu);
  }, []);

  // Set clicked sushi to eaten = true
  // and subtract cost from money (wallet)
  function handleEat(id, price, eaten) {
    if (money >= price && !eaten) {
      setMoney(currentMoney => currentMoney - price);

      // Set clicked sushi 'eaten' to true
      const updatedMenu = menu.map(menuItem => {
        return menuItem.id === id ? { ...menuItem, eaten: true } : menuItem;
      });
      setMenu(updatedMenu);
    }
  }

  return (
    <div className="app">
      <SushiContainer menu={menu} handleEat={handleEat} />
      <Table money={money} />
    </div>
  );
}

export default App;
