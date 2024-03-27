//This code Belongs to "Aditya Waykos"
// Imports necessary components and functions from react-router-dom to set up routing.
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css"; // Importing global styles for the application.
import UserLogin from "./UserLogin"; // Import UserLogin component for login page.
import RecipeSearch from "./RecipeSearch"; // Import RecipeSearch component for searching recipes.
import LandingPage from "./LandingPage"; // Import LandingPage component as the main entry point.

// Defines the main function component for the application.
function Application() {
  // Creates a router using createBrowserRouter, configuring the routes for the application.
  const mainRouter = createBrowserRouter([
    {
      path: "/", // The root path for the LandingPage.
      element: <LandingPage />, // The component to render at the root path.
      children: [
        {
          path: "recipe-search", // Path for the RecipeSearch component.
          element: <RecipeSearch />, // Component to render for recipe search.
        },
        {
          path: "user-login", // Path for the UserLogin component.
          element: <UserLogin />, // Component to render for user login.
        },
      ],
    },
  ]);

  // RouterProvider component is used to enable routing throughout the application.
  // It requires the router configuration created above to manage the navigation and rendering.
  return <RouterProvider router={mainRouter}></RouterProvider>; 
}

// Exports the Application component to be used as the entry point of the React application.
export default Application;
