import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ menu, handleEat, handleMore }) {
  return (
    <div className="belt">
      {menu.slice(0, 4).map(menuItem => {
        return (
          <Sushi key={menuItem.id} item={menuItem} handleEat={handleEat} />
        );
      })}
      <MoreButton onMoreClick={handleMore} />
    </div>
  );
}

export default SushiContainer;
