import React, { useState } from "react";

function PlantCard({ deletePlant, id, image, name, price }) {
  const [inStock, setInStock] = useState(true)

  const handleClick = () => setInStock(false)
  const handleDelete = () => deletePlant(id)

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <div className={"row"}>
        {inStock ? (
          <button
              className="primary"
              onClick={handleClick}
          >
            In Stock
          </button>
        ) : (
          <button>Out of Stock</button>
        )}
        <button onClick={handleDelete}>x</button>
      </div>
    </li>
  );
}

export default PlantCard;
