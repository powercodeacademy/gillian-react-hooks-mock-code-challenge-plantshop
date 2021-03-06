# DELIVERABLE 1: When the app starts, I can see all plants.

## Step 1:
  - [x] Initialize a state to hold the list of plants
  - [x] Use fetch to make a GET request for the plants and update the state with the response
        (Do all this inside of a useEffect)
## STEP 2:
  - [x] Pass the state of plants through to the plant list as a prop
  - [x] (In the PlantList component) Iterate through the plants, and render one PlantCard for each plant


# DELIVERABLE 2: I can add a new plant to the page by submitting the form.

## Step 1: Make the NewPlantForm into a controlled component
  - [x] Need a formData state to hold the data
  - [x] Connect the formData state to the inputs (make the input value the corresponding formData attribute)
  - [x] Need onChange event handlers to update the state as inputs are changed

## Step 2: Handle submitting the form and updating the database
  - [x] Make a placeholder handleSubmit event handler for when the form is submitted (in the NewPlantForm component), and a placeholder createPlant function to post to the database (in the PlantPage component)
  - [x] Send the data up from NewPlantForm to PlantPage (fill in the handleSubmit function)
  - [x] Use fetch to make the POST request to the database (fill in the createPlant function)
## Step 3: Render the new plant on the page
  - [x] Update the plants state to add the newly created plant to the page
  - [x] Clear the input field


# DELIVERABLE 3: I can mark a plant as "sold out"
  - [x] Create a state for each plant (inside of PlantCard) to keep track of whether a plant is inStock
  - [x] Conditionally render the "in stock" (or "out of stock") button based on the state
  - [x] Need an event handler to toggle to out of stock onClick of the green button


# DELIVERABLE 4: I can search for plants by their name and see a filtered list of plants

## Step 1: Keep track of the search input as a state
  - [x] Initialize a new "search" state (in the PlantPage component)
  - [x] Turn the Search input into a controlled input that updates the "search" state in the PlantPage component

## Step 2: Filter through plants based on what is being searched for and display on the page
  - [x] Create a filteredPlants variable that filters based on the search state
  - [x] Replace the plants variable that's passed as a prop to the PlantList with the new filteredPlants one