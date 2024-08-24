import React from "react";
import { data } from "./data.js";
import MenuList from "./MenuList.jsx";

const TreeView = () => {
  return (
    <div
      style={{
        width: "350px",
        background: "rgb(0,71,110)",
        minHeight: "100vh",
        paddingTop: "30px",
        color: "#fff",
      }}
    >
      {data && data.length && <MenuList list={data} />}
    </div>
  );
};

export default TreeView;
