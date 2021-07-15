import React from "react";

import PlantCard from "./PlantCard";

function PlantList({ deletePlant, plants }) {
  const plantCardComponents = plants.map(plant => (
    <PlantCard
        deletePlant={deletePlant}
        key={plant.id}
        {...plant}
    />
  ))

  return (
    <ul className="cards">{plantCardComponents}</ul>
  );
}

export default PlantList;
