import React from "react";
import TextField from "@material-ui/core/TextField";
const Body = () => {
  return (
    <div className="bodyContent">
      <div className="Contentleft">
        <div className="ContentSeach">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className=""></div>
      <div className="ContentRight">
        <div className="rightAbout">About the author</div>
      </div>
    </div>
  );
};

export default Body;
