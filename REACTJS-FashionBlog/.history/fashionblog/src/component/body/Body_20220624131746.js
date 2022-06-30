import React from "react";
import bitmap from "../../image/Bitmap.png";
import { ImageInfo, Image } from "./info";
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
              image1={item.image1}
              image2={item.image2}
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
