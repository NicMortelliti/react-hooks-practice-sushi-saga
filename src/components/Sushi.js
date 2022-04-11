import React from "react";

function Sushi({ item: { id, name, img_url, price, created }, handleEat }) {
  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleEat(id)}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
