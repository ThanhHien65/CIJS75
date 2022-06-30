import bitmap from "../../image/Bitmap.png";
import bitmap1 from "../../image/Bitmap1.png";
import bitmap2 from "../../image/Bitmap2.png";
import bitmap3 from "../../image/Bitmap3.png";
import bitmap4 from "../../image/Bitmap4.png";
import bitmap5 from "../../image/Bitmap5.png";
import bitmap7 from "../../image/Bitmap7.png";
import bitmap8 from "../../image/Bitmap8.png";
import bitmap9 from "../../image/Bitmap9.png";
import bitmap10 from "../../image/Bitmap10.png";
import rightmap2 from "../../image/RightMap2.png"
import rightmap3 from "../../image/Rightmap3.png"
import rightmap4 from "../../image/Rightmap4.png"
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
export const ContentSumer = () => {
  return (
    <div className="ContentSummer">
      <div className="imgSummer">
        <img src={require("../../image/Bitmap6.png")} alt="" />
      </div>
      <div className="SummerDetails">
        <div className="Summer">summer</div>
        <h1 className="tittleSummer">
          One of Saturn’s largest rings may be newer than anyone
        </h1>
        <div className="dateSummer">
          June 6, 2019 By Rickie Baroch 6 comments
        </div>
        <div className="summerbigcontent">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem
        </div>
      </div>
    </div>
  );
};
export const ImageEnd = [
  {
    image1: bitmap7,
    image2: bitmap8,
    tour: "Autumn",
    details: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019 By Rickie Baroch",
  },
  {
    image1: bitmap9,
    image2: bitmap10,
    tour: "SUMMER",
    details: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019 By Rickie Baroch",
  },
];
export const LeftPost = () => {
  return (
    <div className="PostContent">
      <ul className="Postdetail">
        <li>OLDER POST</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>...</li>
        <li>8</li>
        <li>NEXT POST</li>
      </ul>
    </div>
  );
};
export const RightMoredetails = [{
   image: rightmap2,
   city : "jeans",
   content :"One of Saturn’s largest rings may be newer than anyone",
   date :"June 6, 2019    By Rickie Baroch"
},
{
  image: rightmap3,
  city : "city",
  content :"One of Saturn’s largest rings may be newer than anyone",
  date :"June 6, 2019    By Rickie Baroch"
},
{
  image: rightmap4,
  city : "Photography",
  content :"One of Saturn’s largest rings may be newer than anyone",
  date :"June 6, 2019    By Rickie Baroch"
}]
export const modetailsCate = [
  {
    item :"Fashion",
    number :"(23)",
  },{
    item :"Style & clothes",
    number :"(7)",
  }
  ,{
    item :"Minimalism",
    number :"(16)",
  }
  ,{
    item :"Black & White",
    number :"(5)",
  }
  ,{
    item :"Modern clothes",
    number :"(12)",
  }
]
export const sociaUL = [
  {
    icon: 'F',
    like: '32k likes',
    like2: '814 followers',
    like3: '165 followers',
  },
  {
    icon: 'F',
    like: '32k likes',
    like2: '814 followers',
    like3: '165 followers',
  },
  {
    icon: 'F',
    like: '32k likes',
    like2: '814 followers',
    like3: '165 followers',
  }
]
export const tag = [['Business',"Freelance","Money",],['Experience',"Lifestyle","SEO",],['Wordpress',"Marketing","UX",],['Modern',"Success","Nature",]]
export const ConenteRight = () =>{
  return(
    <div className="ContentRight">
      <div className="rightAbout">About the author</div>   
      <div className="rightImage">
        <div className="RightPicture"><img src={require('../../image/RightMap.png')} alt="" /></div>
        <div className="RighName">Kate Willems</div>
        <div className="RightLike">Food & cooking bloger</div>
        <div className="RightDetails"><p>Hi, I'm Sonia. Cooking is the way I express my creative side to the world. Welcome to my Kitchen Corner on…</p></div>
        <div className="RightContinue">Continue Reading</div>
      </div>
      <div className="rightAbContinue">Featured posts</div>
        {RightMoredetails.map((item,index)=>{
          return(
            <div className="rightContentDetails">
              <div className="Detailsimage"><img src={item.image} alt="" /></div>
              <div className="DetialsCity">{item.city}</div>
              <h1 className="Detailcontent">{item.content}</h1>
              <div className="detailsDate">{item.date}</div>
            </div>
          )
        })}
      <div className="rightAbContinue">Categories</div>
      {modetailsCate.map((item,index)=>{
        return(
          <div className="rightCate">
            <div className="Cateitem">{item.item}</div>
            <div className="Catenumber">{item.number}</div>
          </div>
        )
      })}
      <div className="rightAbContinue">Social media</div>
      {sociaUL.map((item,index)=>{
        return(
          <div className="socialList">
           <div className="sociaUL">
            <li><h1>{item.icon}</h1><br /><p>{item.like}</p></li>
            <li><h1>{item.icon}</h1><br /><p>{item.like2}</p></li>
            <li><h1>{item.icon}</h1><br /><p>{item.like3}</p></li>
          </div>
        </div>
        )
      })}
      <div className="rightAbContinue">Tags</div>
      {tag.map((item,index)=>{
          return(
            <div className="Tagitem">
              {item.map((item,index)=>{
                return(<span className="itemlist">{item}</span>)
              })}
            </div>
          )
      })}
    </div>
  )
}
