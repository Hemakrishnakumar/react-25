import React, { useState } from "react";
import MenuList from "./MenuList";

const MenuItem = ({ item }) => {
  const [active, setIsActive] = useState(false);
  return (
    <li style={{ marginLeft: "24px", listStyle: "none" }}>
      <div
        onClick={() => setIsActive(!active)}
        style={{
          fontSize: "20px",
          padding: "10px 16px",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <span>{item.label}</span>
        {item.children && item.children.length && (
          <span
            style={{
              fontSize: "28px",
              color: "#fff",
            }}
          >
            {active ? "-" : "+"}
          </span>
        )}
      </div>
      {active && <MenuList list={item.children} />}
    </li>
  );
};

export default MenuItem;
