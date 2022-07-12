// import React from 'react';
// import { atom,useRecoilState } from 'recoil';
// const product =atom({
//     key:"product",
//     default:"test"
// })
// const Test = () => {
//     const [productlist,setproductlist] = useRecoilState(product)
//     const getvalue = ()=>{
//         // console.log("aaa");
//         console.log(productlist);
//         console.log(setproductlist);
//     }
//     return (
//         <div>
//             <h1 onClick={getvalue}>Test</h1>
//         </div>
//     );
// };

// export default Test;

{
  /* <div className="infordate">
<p value="Jan">{item.Date}</p>
<p>2022</p>
<h4>16</h4>
</div> */
}
// const arr = '11/05/2001'
// console.log(arr);
// const arrempty = []
// arr.split('/').map((item,index)=>{
//     console.log(item);
// })
// console.log(arrempty);
// console.log(arr.split('/'));
const epanse = [
  {
    Date: "1212/11/222",
    name: "11",
    Amount: "222",
  },
  {
    Date: "1212/11/222",
    name: "11",
    Amount: "222",
  },
  {
    Date: "1212/11/222",
    name: "11",
    Amount: "222",
  },
];
const date = [
  {
    day: "1212",
    month: "11",
    year: "222",
  },
  {
    day: "1212",
    month: "11",
    year: "222",
  },
  {
    day: "1212",
    month: "11",
    year: "222",
  },
];
// epanse[0].Date = date[0];
// epanse[1].Date = date[1];
// epanse[2].Date = date[2];
epanse.forEach((item, index) => {
  console.log(item.Date);
  item.Date = date[index];
});
// console.log(epanse);
