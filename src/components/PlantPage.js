import React, { useEffect, useState } from "react";

import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]) // initialize a state to hold the list of plants

  // use fetch to make a GET request for the plants and update the state with the response
  // do all this inside of a useEffect
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(data => setPlants(data))
  }, [])

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
