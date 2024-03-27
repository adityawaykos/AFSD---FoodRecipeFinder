// Import React for component creation.
import React from 'react';
// Import ReactDOM for rendering the app into the DOM, using the new React 18+ root API.
import ReactDOM from 'react-dom/client';
// Global styles for the application.
import './BaseStyles.css'; 
// The main component that serves as the entry point of the React application.
import MainApplication from './MainApplication'; 
// A utility function for measuring the performance of the application.
import measurePerformance from './measurePerformance'; 

// Create a root container where the React app will be attached.
const applicationRoot = ReactDOM.createRoot(document.getElementById('root'));

// Render the MainApplication component within React's StrictMode for highlighting potential problems.
applicationRoot.render(
  <React.StrictMode>
    <MainApplication />
  </React.StrictMode>
);

// Invoke the performance measurement utility to assess and potentially enhance app performance.
measurePerformance();
