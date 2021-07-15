import React from "react";

import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const plantCardComponents = plants.map(plant => (
    <PlantCard
        image={plant.image}
        key={plant.id}
        name={plant.name}
        price={plant.price}
    />
  ))

  return (
    <ul className="cards">{plantCardComponents}</ul>
  );
}

export default PlantList;
