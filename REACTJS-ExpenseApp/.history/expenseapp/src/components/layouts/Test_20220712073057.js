import React from 'react';
import { atom,useRecoilState } from 'recoil';
const product =atom({
    key:"product",
    default:"test"
})
const Test = () => {
    const [productlist,setproductlist] = useRecoilState(product)
    const getvalue = ()=>{
        // console.log("aaa");
        console.log(productlist);
        console.log(setproductlist);
    }
    return (
        <div>
            <h1 onClick={getvalue}>Test</h1>
        </div>
    );
};

export default Test;

{/* <div className="infordate">
<p value="Jan">{item.Date}</p>
<p>2022</p>
<h4>16</h4>
</div> */}
// const arr = '11/05/2001'
// console.log(arr);
// const arrempty = []
// arr.split('/').map((item,index)=>{
//     console.log(item);
// })
// console.log(arrempty);
// console.log(arr.split('/'));