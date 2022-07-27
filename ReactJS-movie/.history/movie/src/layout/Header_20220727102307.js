import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faBars } from "@fortawesome/fontawesome-free-solid";
const Header = () => {
    const changeIcon= (e)=>{
            e.C
    }
  return (
    <div>
      <div className="menu">
        <div className="menu-icon">
          <FontAwesomeIcon
            icon={faBars}
            onClick{changeIcon}
            style={{ color: "626262", fontSize: "5rem" }}
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
