import React from "react";
import avatarImage from "../../assets/busolami.jpg";
import "./Header.css";

const Avatar = () => {
  return (
    <div>
      <img src={avatarImage} alt="" className="avatar" />
    </div>
  );
};

export default Avatar;
