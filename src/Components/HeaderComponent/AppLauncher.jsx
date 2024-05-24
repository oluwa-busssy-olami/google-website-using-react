import React from "react";
import AppLauncherIcon from "../../assets/app-launcher.512x512.png";
import "./Header.css";

const AppLauncher = () => {
  return (
    <div>
      <img src={AppLauncherIcon} alt="" className="appLauncher" />
    </div>
  );
};

export default AppLauncher;
