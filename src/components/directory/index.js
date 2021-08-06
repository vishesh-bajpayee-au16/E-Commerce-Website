import React from "react";
import MenuItem from "../menuItem";
import HomePageMenuData from "../../database/homePageMenuData";
import { useState } from "react";
import "./index.scss";
const Directory = () => {
  const [menuData, setMenuData] = useState(HomePageMenuData);
  console.log(HomePageMenuData);
  return (
    <div className="directory-menu">
      {menuData.map(({ title, id, imageUrl, size }) => (
        <MenuItem
          size={size}
          title={title.toUpperCase()}
          key={id}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  );
};

export default Directory;
