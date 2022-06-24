
import Bitmap11 from "../../image/Bitmap11.png";
import Bitmap12 from "../../image/Bitmap12.png";
import Bitmap13 from "../../image/Bitmap13.png";
import Bitmap14 from "../../image/Bitmap14.png";
import Bitmap15 from "../../image/Bitmap15.png";
import Bitmap16 from "../../image/Bitmap16.png";
// export const FooterPicture = [
//   {
//     picture: Bitmap11,
//   },
//   {
//     picture: Bitmap12,
//   },
//   {
//     picture: Bitmap13,
//   },
//   {
//     picture: Bitmap14,
//   },
//   {
//     picture: Bitmap15,
//   },
//   {
//     picture: Bitmap16,
//   },
// ];
export const Footer = () => {
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
