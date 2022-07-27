import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <div>
      <div className="menu-icon">
        <FontAwesomeIcon icon="fa-solid fa-coffee" border />
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
  );
};

export default Header;
