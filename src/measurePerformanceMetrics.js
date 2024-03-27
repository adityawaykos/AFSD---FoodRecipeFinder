//This code belongs to "Aditya Waykos"
// Defines a function to measure various web performance metrics.
// It expects a callback function as its parameter to handle the measurement results.
const measurePerformanceMetrics = performanceCallback => {
  // Checks if a valid callback function is provided.
  if (performanceCallback && typeof performanceCallback === 'function') {
    // Dynamically imports the 'web-vitals' module, which contains utilities for measuring
    // key metrics for a healthy site.
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Once the module is successfully imported, call each of the web vital functions
      // provided by the module, passing the callback function to handle the results.

      getCLS(performanceCallback); // Measure Cumulative Layout Shift (CLS).
      getFID(performanceCallback); // Measure First Input Delay (FID).
      getFCP(performanceCallback); // Measure First Contentful Paint (FCP).
      getLCP(performanceCallback); // Measure Largest Contentful Paint (LCP).
      getTTFB(performanceCallback); // Measure Time to First Byte (TTFB).
    });
  }
};

// Exports the function so it can be imported and used in other parts of the application.
export default measurePerformanceMetrics;
