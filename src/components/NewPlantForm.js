import React, { useState } from "react";

function NewPlantForm({ createPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  })

  const handleChange = (event) => {
    event.preventDefault()

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createPlant({
      name: formData.name,
      image: formData.image,
      price: parseInt(formData.price)
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
            name="name"
            onChange={handleChange}
            placeholder="Plant name"
            type="text"
            value={formData.name}
        />
        <input
            name="image"
            onChange={handleChange}
            placeholder="Image URL"
            type="text"
            value={formData.image}
        />
        <input
            name="price"
            onChange={handleChange}
            placeholder="Price"
            step="0.01"
            type="number"
            value={formData.price}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
