import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/fontawesome-free-solid";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Datasearch,GetDatasearch } from "../Components/Datasearch";
const Header = () => {
  const [item, setItem] = useState(false);
  const [enter,setEnter] = useRecoilState(Datasearch);
  const [data,SetData] = useRecoilState(GetDatasearch)
  const getinput =(e) =>{
    if (e.key === 'Enter') {
      setEnter(!enter)
      SetData(e.target.value)
      e.target.value=''
    }
  }
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
          className="search"
          style={
            item
              ? {
                  opacity: "0",
                  transform: "translateX(-10%)",
                }
              : {
                  transform: "translateX(0)",
                  opacity: "1",
                  transition: "transform 0.5s ease-out",
                }
          }
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Search"
            fullWidth
            InputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
            margin="normal"
            autoFocus={false}
            onKeyDown={getinput}
            
          />
        </div>
        <div
          className="menu-item"
          style={
            item
              ? {
                  transform: "translateX(0)",
                  opacity: "1",
                  transition: "transform 0.5s ease-out",
                }
              : { opacity: "0", transform: "translateX(-10%)" }
          }
        >
          <ul>
            <li>
              <Link to="/">Movies</Link>
            </li>
            <li>
              <Link to="/tv">tv show</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
