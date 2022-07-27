import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faBars,
  faTimes,
} from "@fortawesome/fontawesome-free-solid";
const Header = () => {
  const [over, setOver] = useState(false);
  const changeIcon = (e) => {
    console.log(e.target);
    setOver(true);
  };
  return (
    <div>
      <div className="menu">
        <div className="menu-icon">
          <FontAwesomeIcon
            className="fa-icon"
            icon={over ? faBars : faTimes}
            onClick={changeIcon}
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
