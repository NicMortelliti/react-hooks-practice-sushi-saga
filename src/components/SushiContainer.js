import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ menu, handleEat }) {
  const [inView, setInView] = useState([]);

  // function inViewFn(currentIndex = -1) {
  //   // Set number of menu items to view at a time
  //   const currentViewLimit = 4;

  //   for (let index = currentIndex + 1; index < 4; index++) {
  //     const element = menu[index];
  //     console.log(element)
  //   }
      
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
