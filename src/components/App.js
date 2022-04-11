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

  // More button click moves visible 4 menuItems to
  // back of menu and triggers a rerender.
  const handleMore = () => {
    const rearrangeMenu = [...menu.slice(4), ...menu.slice(0, 4)];
    setMenu(rearrangeMenu);
  };

  // Stack those empty plates!
  const eatenSushi = menu.filter(menuItem => menuItem.eaten);

  return (
    <div className="app">
      <SushiContainer
        menu={menu}
        handleEat={handleEat}
        handleMore={handleMore}
      />
      <Table money={money} plates={eatenSushi} />
    </div>
  );
}

export default App;
