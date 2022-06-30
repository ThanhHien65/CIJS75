import React from "react";
import bitmap from "../../image/Bitmap.png";
import { ImageInfo } from "./info";
const Image = (props) => {
  return (
    <div className="ContentImage">
      <div className="image_1">
        <div className="imageFas">
          <img src={require()} alt="" />
        </div>
        <div className="imagedetails">
          <div className="detailstour">{props.tour}</div>
          <h3>{props.details}</h3>
          <div className="detaildate">{props.date}</div>
        </div>
      </div>
      <div className="image_2">
        <div className="imageFas">
          <img src={require("../../image/Bitmap.png")} alt="" />
        </div>
        <div className="imagedetails">
          <div className="detailstour">{props.tour}</div>
          <h3>{props.details}</h3>
          <div className="detaildate">{props.date}</div>
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
        {ImageInfo.map((item, index) => {
          return (
            <Image
              key={index}
              tour={item.tour}
              details={item.details}
              date={item.date}
              imagef={item.image1}
            ></Image>
          );
        })}
      </div>
      <div className="ContentRight">
        <div className="rightAbout">About the author</div>
      </div>
    </div>
  );
};

export default Body;
