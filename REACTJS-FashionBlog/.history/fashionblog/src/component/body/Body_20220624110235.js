import React from "react";
import bitmap from "../../image/Bitmap.png";
import { ImageInfo } from "./info";
const Image = () => {
  return (
    <div className="ContentImage">
      <div className="image_1">
        <div className="imageFas">
          <img src=require("../src/Reactlogo.jpg") alt="" />
        </div>
        <div className="imagedetails">
          <div className="detailstour">Tourism</div>
          <h3>One of Saturn’s largest rings may be newer than anyone</h3>
          <div className="detaildate">June 6, 2019 By Rickie Baroch</div>
        </div>
      </div>
      <div className="image_2">
        <div className="imageFas">
          <img src={bitmap} alt="" />
        </div>
        <div className="imagedetails">
          <div className="detailstour">Tourism</div>
          <h3>One of Saturn’s largest rings may be newer than anyone</h3>
          <div className="detaildate">June 6, 2019 By Rickie Baroch</div>
        </div>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="bodyContent">
      <div className="Contentleft">
        <div className="ContentSeach">
          <input type="text" placeholder="Search" />
        </div>
        <Image></Image>
        <Image></Image>
        <Image></Image>
      </div>
      <div className="ContentRight">
        <div className="rightAbout">About the author</div>
      </div>
    </div>
  );
};

export default Body;
