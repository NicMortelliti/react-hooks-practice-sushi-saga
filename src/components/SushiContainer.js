import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ menu, handleEat }) {
  const [inView, setInView] = useState([]);

  return (
    <div className="belt">
      {menu.slice(0, 4).map(menuItem => {
        return (
          <Sushi key={menuItem.id} item={menuItem} handleEat={handleEat} />
        );
      })}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
