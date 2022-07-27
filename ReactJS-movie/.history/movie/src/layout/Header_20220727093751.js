import React from "react";
import "font-awesome/css/font-awesome.min.css";
const Header = () => {
  return (
    <div>
      <div className="menu-icon">
        <FontAwesomeIcon icon={["fal", "coffee"]} />
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
