import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
} from "@fortawesome/fontawesome-free-solid";
const Header = () => {
  const [item, setItem] = useState(false);
  const changeIcon = (e) => {
    setItem(!item);
  };

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
        <div
          className="menu-item"
          style={
            item
              ? { transform: translateX(100vw)", opacity: "1" }
              : {
                  opacity: "0",
                  transition: "visibility 0s, opacity 0.2s linear",
                }
          }
        >
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
