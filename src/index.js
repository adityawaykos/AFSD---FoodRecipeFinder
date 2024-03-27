//This code belongs to "Aditya Waykos"
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for rendering
import './BaseStyles.css'; // Importing base styles
import MainApplication from './MainApplication'; // Importing the main application component
import measurePerformanceMetrics from './measurePerformanceMetrics'; // Importing a function to measure performance metrics

// Creating a root for ReactDOM to render the application
const applicationRoot = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the main application component wrapped in React.StrictMode
applicationRoot.render(
  <React.StrictMode>
    <MainApplication />
  </React.StrictMode>
);

// Calling a function to measure performance metrics
measurePerformanceMetrics();
