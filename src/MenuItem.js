//This code belongs to "Aditya Waykos"
import React, { useState } from "react";
import "./MenuItemStyles.css"; // Importing CSS for styling MenuItem components
import MenuItemDetails from "./MenuItemDetails"; // Import component to display details of a menu item

// Defines the MenuItem component which takes props passed from its parent component
const MenuItem = (props) => {
  // State to manage visibility of the item's details, initialized as null (hidden)
  const [detail, setDetail] = useState(null);

  // Extracting menuItemData from props for easier access to the item data
  const menuItemData = props.data;

  // Function to toggle the visibility of the item's details
  const toggleDetails = () => {
    // If 'detail' is not null (details are shown), set it to null to hide them, 
    // otherwise, set it to menuItemData to show details
    if (detail) {
      setDetail(null);
    } else {
      setDetail(menuItemData); 
    }
  };

  // Render the menu item
  return (
    <>
      <div className="MenuItemContainer">
        {/* Display the menu item's image */}
        <img src={menuItemData.image} alt="Img" />
        {/* Display the menu item's label */}
        <p>{menuItemData.label}</p>
        {/* Button to toggle the visibility of the item's details */}
        <button type="button" onClick={toggleDetails}>
          View
        </button>
      </div>
      {/* Conditionally render MenuItemDetails component if 'detail' is not null */}
      {detail && <MenuItemDetails item={detail} />}
    </>
  );
};

export default MenuItem;
