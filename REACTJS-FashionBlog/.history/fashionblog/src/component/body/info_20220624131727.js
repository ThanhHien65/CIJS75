export const ImageInfo = [
  {
    image1: "../../image/Bitmap.png",
    image2: "../../image/Bitmap.png",
    tour: "Tourism",
    details: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019 By Rickie Baroch",
  },
  {
    image1: "../../image/Bitmap.png",
    image2: "../../image/Bitmap.png",
    tour: "Tourism",
    details: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019 By Rickie Baroch",
  },
  {
    image1:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    image2: "../../image/Bitmap.png",
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
