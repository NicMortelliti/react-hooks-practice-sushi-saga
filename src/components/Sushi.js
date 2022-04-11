import React from "react";

function Sushi({
  item: { created, eaten, id, img_url, name, price },
  handleEat,
}) {
  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleEat(id, price, eaten)}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
