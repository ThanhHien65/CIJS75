import React from "react";
import Footer from "../footer/Footer";
import {
  ImageInfo,
  Image,
  ContentSumer,
  ImageEnd,
  LeftPost,
} from "./bodydetails";
const Body = () => {
  return (
    <div className="APP">
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
          <ContentSumer></ContentSumer>
          {ImageEnd.map((item, index) => {
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
          <LeftPost></LeftPost>
        </div>
        <div className="ContentRight">
          <div className="rightAbout">About the author</div>
        </div>
      </div>
      ><
    </div>
  );
};

export default Body;
