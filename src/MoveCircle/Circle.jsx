import React, { useEffect, useState } from "react";

const Circle = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  function clickHandler(e) {
    console.log(e);
    setPosition({ x: e.clientX, y: e.clientY });
  }
  return (
    <div onMouseMove={clickHandler} style={{ width: "100vw", height: "100vh" }}>
      <DrawCircle x={position.x} y={position.y} />
    </div>
  );
};

export default Circle;

function DrawCircle({ x = 50, y = 50, d = 100 }) {
  return (
    <div
      style={{
        width: d + "px",
        height: d + "px",
        borderRadius: "50%",
        border: "2px solid #111",
        position: "fixed",
        top: `${y - d / 2}px`,
        left: `${x - d / 2}px`,
      }}
    ></div>
  );
}
