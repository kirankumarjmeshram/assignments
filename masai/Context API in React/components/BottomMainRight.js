import React from "react";

function BottomMainRight({ userName }) {
  return (
    <div style={{ marginTop: "10px", border: "1px solid #888", padding: "10px" }}>
      <h4>BottomMainRight Component</h4>
      <p>Hello, <strong>{userName || "Guest"}</strong>!</p>
    </div>
  );
}

export default BottomMainRight;
