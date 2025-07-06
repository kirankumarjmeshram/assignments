import React from "react";
import BottomMainRight from "./BottomMainRight";

function BottomMain({ userName }) {
  return (
    <div style={{ marginTop: "20px", border: "1px solid #aaa", padding: "10px" }}>
      <h3>BottomMain Component</h3>
      <BottomMainRight userName={userName} />
    </div>
  );
}

export default BottomMain;
