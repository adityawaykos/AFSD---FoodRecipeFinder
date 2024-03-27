//This code belongs To "Aditya Waykos"
// Importing React for component creation.
import React from "react";
// Importing the MenuItem component to display individual recipes.
import MenuItem from "./MenuItem";
// Importing CSS styles specific to the MenuItem components.
import "./MenuItemStyles.css"; 

// RecipeList component receives props from its parent, including a data array of recipes.
const RecipeList = (props) => {
  return (
    // Container div for the list of recipes.
    <div className="recipeListContainer"> 
      {/* Mapping over the data array passed through props to generate MenuItem components for each recipe.
          It's recommended to use a more stable identifier than index for the key prop if possible.
          Here, assuming item.recipe.uri is a unique identifier for each recipe. */}
      {props.data.map((item) => (
        // Each MenuItem is wrapped in a div with a unique key for React's reconciliation process.
        <div key={item.recipe.uri}>
          {/* Passing the recipe data to the MenuItem component. */}
          <MenuItem data={item.recipe} /> 
        </div>
      ))}
    </div>
  );
};

// Exporting RecipeList for use in other parts of the application.
export default RecipeList;
