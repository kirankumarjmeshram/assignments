function fetchUserData(callback) {
  console.log("Fetching user data...");
  setTimeout(() => {
    console.log("User data received");
    callback(); // Call the next function after 1s
  }, 1000);
}

function fetchUserPosts(callback) {
  console.log("Fetching user posts...");
  setTimeout(() => {
    console.log("User posts received");
    callback(); // Final callback after 1.5s
  }, 1500);
}

fetchUserData(() => {
  fetchUserPosts(() => {
    console.log("All data loaded successfully!");
  });
});
