import React from "react";
import BottomMain from "./BottomMain";

function Main({ userName }) {
  return (
    <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
      <h2>Main Component</h2>
      <BottomMain userName={userName} />
    </div>
  );
}

export default Main;
