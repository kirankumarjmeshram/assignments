let loadingInterval = setInterval(() => {
    console.log("Loading...");
  }, 1000); // Repeat every 1 second
  
  // Stop loading after 5 seconds
  setTimeout(() => {
    clearInterval(loadingInterval); // Stop the repeated "Loading..." messages
    console.log("Loaded successfully!");
  }, 5000);

// Loading...
// Loading...
// Loading...
// Loading...
// Loaded successfully!