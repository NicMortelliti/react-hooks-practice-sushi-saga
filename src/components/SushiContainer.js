import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ menu }) {
  return (
    <div className="belt">
      {menu.map(menuItem => {
        return <Sushi item={menuItem} />;
      })}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
