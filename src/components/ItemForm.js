//Make all the input fields for this form controlled inputs, 
//so that you can access all the form data via state. 
//When setting the initial state for the <select> tag, 
//use an initial value of "Produce" (since that's the first option in the list).

//Handle the form's submit event, 
//and use the data that you have saved in state to create a new item object with 
//the following properties:

//Add the new item to the list by updating state. 
//To get the test passing, you'll need to use a prop called onItemFormSubmit as a callback 
//and pass the new item to it.

import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name,
      category,
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
  }
export default ItemForm;
