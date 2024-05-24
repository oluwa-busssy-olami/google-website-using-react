import React from "react";
import Location from "./Location";

import CopyWright from "./CopyWright";

import "./Footer.css";
import Services from "./Services";

const FooterComponent = () => {
  return (
    <div className="footer">
      <Location />
      <div className="service-container">
        <div className="left">
          <Services title={"About"} />
          <Services title={"Advertising"} />
          <Services title={"Business"} />
          <Services title={"How Search works"} />
        </div>
        <div className="copy-wright">
          <CopyWright />
        </div>
        <div className="right">
          <Services title={"Privacy"} />
          <Services title={"Terms"} />
          <Services title={"Settings"} />
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
