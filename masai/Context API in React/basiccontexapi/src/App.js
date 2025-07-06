import React, { useState } from "react";
import Main from "./components/Main";

function App() {
  const [userName, setUserName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Props Drilling Example</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Main userName={userName} />
    </div>
  );
}

export default App;
