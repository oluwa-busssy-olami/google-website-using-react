import React from "react";
import "./Header.css";
import MenuItem from "./MenuItem";
import AppLauncher from "./AppLauncher";
import Avatar from "./Avatar";
import LabHeader from "./LabHeader";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="header-component">
        <MenuItem title={"Gmail"} />
        <MenuItem title={"Image"} />
        <LabHeader />
        <AppLauncher />
        <Avatar />
      </div>
    </div>
  );
};

export default HeaderComponent;
