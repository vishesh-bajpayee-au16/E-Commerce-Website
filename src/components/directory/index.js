import React from "react";
import MenuItem from "../menuItem";
import { useSelector } from "react-redux";
import "./index.scss";
const Directory = () => {
  const directory = useSelector((state) => state.directory);

  return (
    <div className="directory-menu">
      {directory.map(({ id, ...otherMenuProps }) => (
        <MenuItem key={id} {...otherMenuProps} />
      ))}
    </div>
  );
};

export default Directory;
