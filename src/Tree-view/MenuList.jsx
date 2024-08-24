import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  return (
    <ul>
      {list.map((item) => (
        <MenuItem item={item} key={item} />
      ))}
    </ul>
  );
};

export default MenuList;
