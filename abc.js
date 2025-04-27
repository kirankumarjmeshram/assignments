import React, { useState } from "react";

const EveryThirdCharacter = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <p>{text.split("").filter((_, i) => (i + 1) % 3 === 0).join("")}</p>
    </div>
  );
};

export default EveryThirdCharacter;
