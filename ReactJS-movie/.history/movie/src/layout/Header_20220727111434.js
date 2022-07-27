import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faBars,
  faTimes,
} from "@fortawesome/fontawesome-free-solid";
const Header = () => {
  const [item, setItem] = useState(false);
  const changeIcon = (e) => {
    setItem(!item);
  };
  const 
  return (
    <div>
      <div className="menu">
        <div className="menu-icon" onClick={changeIcon}>
          <FontAwesomeIcon
            className="fa-icon"
            icon={item ? faTimes : faBars}
            style={{ color: "626262", fontSize: "5rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
