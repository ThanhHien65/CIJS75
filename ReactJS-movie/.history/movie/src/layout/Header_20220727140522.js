import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/fontawesome-free-solid";
import TextField from "@mui/material/TextField";
export const Header = () => {
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
        <div className="search">
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Search"
            fullWidth
            InputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
            margin="normal"
            autoFocus={true}
          />
        </div>
        <div
          className="menu-item"
          style={
            item
              ? {
                  transform: "translateX(0)",
                  opacity: "1",
                  transition: "transform 1.5s ease-out",
                }
              : { opacity: "0", transform: "translateX(-10%)" }
          }
        >
          <ul>
            <li>movies</li>
            <li>live tv</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
