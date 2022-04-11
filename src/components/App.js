import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(setMenu);
  }, []);

  function handleEat(id) {
    console.log(id);
  }

  return (
    <div className="app">
      <SushiContainer menu={menu} handleEat={handleEat} />
      <Table />
    </div>
  );
}

export default App;
