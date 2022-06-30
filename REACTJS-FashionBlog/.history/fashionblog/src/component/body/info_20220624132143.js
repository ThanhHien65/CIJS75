import bitmap from "../../image/Bitmap.png";
export const ImageInfo = [
  {
    image1: "../../image/Bitmap.png",
    image2:
      "https://images.unsplash.com/photo-1557777586-f6682739fcf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    tour: "Tourism",
    details: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019 By Rickie Baroch",
  },
  {
    image1:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    image2:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    tour: "Tourism",
    details: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019 By Rickie Baroch",
  },
  {
    image1:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    image2:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
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
