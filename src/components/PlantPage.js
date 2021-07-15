import React, { useEffect, useState } from "react";

import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]) // initialize a state to hold the list of plants
  const [search, setSearch] = useState("")

  // use fetch to make a GET request for the plants and update the state with the response
  // do all this inside of a useEffect
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(data => setPlants(data))
  }, [])

  const createPlant = (newPlant) => {
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    }

    fetch("http://localhost:6001/plants", configObject)
      .then(response => response.json())
      .then(data => setPlants([...plants, data]))
  }

  const filteredPlants = plants.filter(plant => (
    plant.name.toLowerCase().includes(search.toLowerCase())
  ))

  return (
    <main>
      <NewPlantForm createPlant={createPlant} />
      <Search
          search={search}
          setSearch={setSearch}
      />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
