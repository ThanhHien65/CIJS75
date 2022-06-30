import React from "react";
import Bitmap11 from "../../image/Bitmap11.png";
export const FooterPicture = [
  {
    picture : Bitmap11
  },
  {
    picture : Bitmap11
  },
];
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerIng">
        <h1>Follow our @instagram_name</h1>
      </div>
      <div className="footerimage">
        <div className="imagegirl">
          <img src={Bitmap11} alt="" />
        </div>
        <div className="imagegirl">
          <img src={Bitmap11} alt="" />
        </div>
        <div className="imagegirl">
          <img src={Bitmap11} alt="" />
        </div>
        <div className="imagegirl">
          <img src={Bitmap11} alt="" />
        </div>
        <div className="imagegirl">
          <img src={Bitmap11} alt="" />
        </div>
        <div className="imagegirl">
          <img src={Bitmap11} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
