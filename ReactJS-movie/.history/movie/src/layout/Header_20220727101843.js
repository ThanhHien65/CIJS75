import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faBars } from "@fortawesome/fontawesome-free-solid";
const Header = () => {
  return (
    <div>
      <div className="menu">
        <div className="menu-icon">
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "626262", fontSize: "50px" }}
          />
        </div>
        <div className="menu-item">
          <ul>
            <li>live tv</li>
            <li>tv shows</li>
            <li>movies</li>
            <li>video</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
