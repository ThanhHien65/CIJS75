import React from "react";
bitmap
const Body = () => {
  return (
    <div className="bodyContent">
      <div className="Contentleft">
        <div className="ContentSeach">
          <input type="text" placeholder="Search" />
        </div>
        <div className="ContentImage">
          <div className="image_1">
            <div className="imageFas">
              <img src={bitmap} alt="" />
            </div>
            <div className="imagedetails">
              <div className="detailstour">Tourism</div>
              <h3>One of Saturn’s largest rings may be newer than anyone</h3>
              <div className="detaildate">June 6, 2019 By Rickie Baroch</div>
            </div>
          </div>
          <div className="image_2">
            <div className="imageFas"></div>
            <div className="imagedetails">
              <div className="detailstour">Tourism</div>
              <h3>One of Saturn’s largest rings may be newer than anyone</h3>
              <div className="detaildate">June 6, 2019 By Rickie Baroch</div>
            </div>
          </div>
        </div>
      </div>
      <div className="ContentRight">
        <div className="rightAbout">About the author</div>
      </div>
    </div>
  );
};

export default Body;
