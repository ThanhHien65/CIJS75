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
      <div className="ContentImage">
        <div className="image_1">
          <div className="imageFas"></div>
          <div className="imagedetails">
            <div className="detailstour">Tourism</div>
            <h3>One of Saturn’s largest rings may be newer than anyone</h3>
          </div>
        </div>
        <div className="image_2"></div>
      </div>
      <div className="ContentRight">
        <div className="rightAbout">About the author</div>
      </div>
    </div>
  );
};

export default Body;
