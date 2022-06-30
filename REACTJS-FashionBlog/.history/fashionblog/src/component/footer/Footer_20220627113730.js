import Bitmap11 from "../../image/Bitmap11.png";
import Bitmap12 from "../../image/Bitmap12.png";
import Bitmap13 from "../../image/Bitmap13.png";
import Bitmap14 from "../../image/Bitmap14.png";
import Bitmap15 from "../../image/Bitmap15.png";
import Bitmap16 from "../../image/Bitmap16.png";
export const FooterPicture = [
  {
    picture: Bitmap11,
  },
  {
    picture: Bitmap12,
  },
  {
    picture: Bitmap13,
  },
  {
    picture: Bitmap14,
  },
  {
    picture: Bitmap15,
  },
  {
    picture: Bitmap16,
  },
];
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerIng">
        <h1>Follow our @instagram_name</h1>
      </div>
      <div className="footerimage">
        {FooterPicture.map((item, index) => (
          <div className="imagegirl">
            <img src={item.picture} alt="" />
          </div>
        ))}
      </div>
      <div className="FashionBlock">
        <div className="FooterFashion">fashion</div>
      </div>
      <div className="FooterUl">
        <div className="Ulist">
          <li>home</li>
          <li>recpies</li>
          <li>article</li>
          <li>contact</li>
          <li>purchase</li>
        </div>
      </div>
      <div className="FooterItem">
        <div className="ULitem">
          <li>F</li>
          <li>F</li>
          <li>F</li>
          <li>F</li>
          <li>F</li>
          <li>F</li>
        </div>
      </div>
      <div className="FooterLine"></div>
    </div>
  );
};
ex