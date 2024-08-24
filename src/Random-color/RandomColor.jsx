import React, { useState } from "react";

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

const hexData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const RandomColor = () => {
  const [type, setType] = useState("HEX");
  const [color, setColor] = useState("#111111");

  function generateColor() {
    if (type === "HEX") {
      let hex = "#";
      for (let i = 0; i < 6; i++) {
        hex += hexData[getRandom(hexData.length)];
      }
      setColor(hex);
    } else {
      const rgb = `rgb(${getRandom(257)},${getRandom(257)},${getRandom(257)})`;
      setColor(rgb);
    }
  }
  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <button onClick={() => setType("HEX")}>HEX</button>
        <button onClick={() => setType("RGB")}>RGB</button>
        <button onClick={generateColor}>Generate random color</button>
      </div>
      <h1 style={{ color: "#fff", marginTop: "300px" }}>
        Color {type} {color}
      </h1>
    </div>
  );
};

export default RandomColor;
