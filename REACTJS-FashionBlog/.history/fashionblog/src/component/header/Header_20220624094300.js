import React from "react";
import TextField from "@mui/material/TextField";
const Header = () => {
  return (
    <div className="header">
      <div className="headerBig">
        <div className="headerFashion">fashion</div>
        <ul className="headerItem">
          <li>home</li>
          <li>recipes</li>
          <li>article</li>
          <li>contact</li>
          <li>purchase</li>
        </ul>
      </div>
      <div className="headerBanner">
        <div className="bannercontent">
          <div className="bannerVehicle">vehicle</div>
          <h1 className="bannerslogan">
            One of Saturn’s largest rings may be newer than anyone
          </h1>
          <div className="bannertime">
            June 6, 2019 By Rickie Baroch 4 comments
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
