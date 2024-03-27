// This code belongs to "Aditya Waykos"
// Import React and necessary components from react-router-dom for navigation.
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./MenuItemStyles.css"; // Import stylesheet for styling the component.

// Defines the Home component as a functional component.
const Home = () => {
  return (
    <div>
      {/* Navigation bar section */}
      <nav className="nav">
        {/* Site title or branding */}
        <h1>Your Favourite Food Recipe</h1>
        {/* Navigation links list */}
        <ul>
          {/* Navigation item to the Home page */}
          <li>
            <Link to="/" >Home</Link>
          </li>
          {/* Navigation item to the Recipe page */}
          <li>
            <Link to="/recipe">Recipe</Link>
          </li>
          {/* Navigation item to the Login page */}
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      {/* Outlet component to render the matched child route components */}
      <Outlet />
    </div>
  );
};

// Exports the Home component to be used in other parts of the application.
export default Home;
