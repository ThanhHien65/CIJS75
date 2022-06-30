import bitmap from "../../image/Bitmap.png";
import bitmap1 from "../../image/Bitmap1.png";
import bitmap2 from "../../image/Bitmap2.png";
import bitmap3 from "../../image/Bitmap3.png";
import bitmap4 from "../../image/Bitmap4.png";
import bitmap5 from "../../image/Bitmap5.png";
export const ImageInfo = [
  {
    image1: bitmap,
    image2: bitmap1,
    tour: "Tourism",
    details: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019 By Rickie Baroch",
  },
  {
    image1: bitmap2,
    image2: bitmap3,
    tour: "Tourism",
    details: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019 By Rickie Baroch",
  },
  {
    image1: bitmap4,
    image2: bitmap5,
    tour: "Tourism",
    details: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019 By Rickie Baroch",
  },
];
export const Image = (props) => {
  return (
    <div className="ContentImage">
      <div className="image_1">
        <div className="imageFas">
          <img src={props.image1} alt="" />
        </div>
        <div className="imagedetails">
          <div className="detailstour">{props.tour}</div>
          <h3>{props.details}</h3>
          <div className="detaildate">{props.date}</div>
        </div>
      </div>
      <div className="image_2">
        <div className="imageFas">
          <img src={props.image2} alt="" />
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
export const 