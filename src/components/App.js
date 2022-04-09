import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(menuData => setMenu(menuData));
  }, []);

  return (
    <div className="app">
      <SushiContainer menu={menu} />
      <Table />
    </div>
  );
}

export default App;
