//This code belongs to "Aditya Waykos"
import React from "react";
import "./MenuItemStyles.css";

const ViewItems = (props) => {
  // Destructuring props to access the item object
  const item = props.item;
  
  // Logging totalNutrients for debugging purposes
  console.log(item.totalNutrients);
  
  return (
    <>
      <div>
        <table>
          <thead></thead>
          <tbody>
            {/* Displaying Cuisines */}
            <tr>
              <td>Cuisines</td>
              <td>
                {item.cuisineType.map((res) => (
                  <li>{res}</li>
                ))}
              </td>
            </tr>
            {/* Displaying Source */}
            <tr>
              <td>Source</td>
              <td>{item.source}</td>
            </tr>
            {/* Displaying Calories */}
            <tr>
              <td>Calories</td>
              <td>{item.calories}</td>
            </tr>
            {/* Displaying Type Of Dish */}
            <tr>
              <td>Type Of Dish</td>
              <td>{item.dishType.map((res) => res)}</td>
            </tr>
            {/* Displaying Ingredients */}
            <tr>
              <td>Ingredients</td>
              <td>
                {item.ingredientLines.map((res) => (
                  <li>{res}</li>
                ))}
              </td>
            </tr>
            {/* Displaying TotalNutrients */}
            <tr>
              <td>TotalNutrients</td>
              <td>
                <li>
                  {`${item.totalNutrients.CA.label} = 
                  ${item.totalNutrients.CA.quantity}
                  ${item.totalNutrients.CA.unit}`}
                </li>
                <li>
                  {`${item.totalNutrients.SUGAR.label} = 
                  ${item.totalNutrients.SUGAR.quantity}
                  ${item.totalNutrients.SUGAR.unit}`}
                </li>
                <li>
                  {`${item.totalNutrients.FASAT.label} = 
                  ${item.totalNutrients.FASAT.quantity}
                  ${item.totalNutrients.FASAT.unit}`}
                </li>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewItems;
