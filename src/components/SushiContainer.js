import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ menu, handleEat }) {
  return (
    <div className="belt">
      {menu.map(menuItem => {
        return (
          <Sushi key={menuItem.id} item={menuItem} handleEat={handleEat} />
        );
      })}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
