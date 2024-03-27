// This code belongs to "Aditya Waykos"
import React, { useState } from "react";
import RecipeList from "./RecipeList";
import "./RecipeFinderStyles.css";

const RecipeFinder = () => {
  // State for storing the list of recipes
  const [recipes, setRecipes] = useState([]);
  // State for storing the user's search query
  const [query, setQuery] = useState("");

  // Spoonacular API key for fetching recipes
  const spoonacularApiKey = "32727ba01bc7411418343579adebaeb7";

  // Function to fetch recipes based on the search query
  const fetchRecipes = async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${spoonacularApiKey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Response not ok');
      const data = await response.json();
      setRecipes(data.results || []); // Handle potential empty results
    } catch (error) {
      console.error("Failed to fetch recipes:", error);
      setRecipes([]); // Reset recipes state in case of error
    }
  };

  // Updates the query state as the user types in the search box
  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  // Triggers a search when the search button is clicked
  const performSearch = () => {
    if (query.trim().length === 0) { // Prevents search with empty or space-only queries
      alert("Please enter your favourite food");
      setRecipes([]);
    } else {
      fetchRecipes();
    }
  };

  // Refreshes the search results, can be expanded for more functionality
  const refreshSearch = () => {
    performSearch(); // Currently, simply re-performs the search
  };

  return (
    <div className="recipeFinderContainer">
      <input 
        type="text" 
        onChange={handleSearchChange} 
        placeholder="Search Here" 
        value={query} // Controlled component for the input field
      />
      <button 
        type="button"
        onClick={performSearch} 
        style={{ marginLeft: "2rem" }}
      >
        Search
      </button>
      <button
        type="button"
        onClick={refreshSearch}
        style={{ marginLeft: "2rem" }}
      >
        Refresh
      </button>
      {/* Conditionally renders the RecipeList component if recipes are available */}
      {recipes.length > 0 && <RecipeList data={recipes} />}
    </div>
  );
};

export default RecipeFinder;
