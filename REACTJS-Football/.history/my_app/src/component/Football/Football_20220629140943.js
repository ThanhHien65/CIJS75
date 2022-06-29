import React, { useState } from "react";
import "./Football.css";
export const Football = () => {
  let infoPlayer = [
    {
      img: "https://library.sportingnews.com/styles/crop_style_16_9_tablet/s3/2022-05/CristianoRonaldo%20-%20cropped.jpg?itok=HgunUgeG",
      age: "32",
      name: "Cristiano Ronaldo",
      position: "GK",
    },
    {
      img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltee41eef7e0a0e3f3/626b8172918f4e4e59121e78/GettyImages-1240053215.jpg?quality=80&width=1000&format=pjpg&auto=webp",
      age: "35",
      name: "Lionel Messi",
      position: "GK",
    },
    {
      img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4e0a5bb5ccb7b737/62279f5caf95510737333d62/neymar_psg_real.jpg?auto=webp&format=jpg&quality=100",
      age: "38",
      name: "Neymar",
      position: "GK",
    },
    {
      img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3a48501789cdf113/60db790b47339c0fc01c188c/3e947186d512164cf8dbe0987a865dd2b714eea6.png?quality=80&width=1000&format=pjpg&auto=webp",
      age: "36",
      name: "David Beckham",
      position: "GK",
    },
    {
      img: "https://cdnimg.vietnamplus.vn/t620/uploaded/jopluat/2017_03_25/ronaldinho.jpg",
      age: "39",
      name: "Ronaldinho",
      position: "GK",
    },
    {
      img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt28d713496e7fe3df/62b37754e021f80ecf97c8cb/Zlatan_Ibrahimovic_AC_Milan_2021-22.jpg?quality=80&width=1000&format=pjpg&auto=webp",
      age: "40",
      name: "Zlatan Ibrahimovic",
      position: "GK",
    },
  ];
  const [add, setAdd] = useState(infoPlayer);
  const AddPlayer = () => {
    const addMorePlay = [
      {
        img: "https://photo-cms-sggp.zadn.vn/w580/Uploaded/2022/evofzyresfj/2021_10_13/fbcad2dx0airlxr_uzrf.jpg",
        age: "39",
        name: "Sergio Ramos",
        position: "GK",
      },
      {
        img: "https://baokhanhhoa.vn/dataimages/202108//original/images5463988_Real_Madrid_l_y_g_____chi_u_m__Kylian_Mbappe_2.jpg",
        age: "21",
        name: "Kylian Mbappe",
        position: "GK",
      },
      {
        img: "https://img.nhandan.com.vn/Files/Images/2020/11/10/005-1605024440410.jpg",
        age: "30",
        name: "Mohamed Salah",
        position: "GK",
      },
    ];
    const addArray = [...infoPlayer, ...addMorePlay];
    console.log(addArray);
    const random = Math.floor(Math.random() * addArray.length);
    const addList = [...add, addArray[random]];
    setAdd(addList);
    console.log(add);
  };
  const [fill, setFill] = useState(add);
  const fillPlayer = () => {
    const fillName = add
      .map((item) => item.name)
      .filter((v, i, vIds) => vIds.indexOf(v) !== i);
    const result = add.filter((obj) => fillName.includes(obj.name));
    const empty = (arr) => (arr.length = 0);
    empty(add);
    setFill(add.push(...result));
    console.log(add);
  };
  const [remove, setRemove] = useState(add);
  const removePlayer = () => {
    setRemove(add.pop());
    console.log(add);
  };
  const [choose, setChoose] = useState(add);
  const Choice = (e) => {
    const resutl = e.target.getAttribute("value");
    const RemoveSpecial = add.splice(add[resutl], 1);
    setChoose(RemoveSpecial);
  };
  const [createPlay, SetCreatePlay] = useState(add);
  const createPlayer = () => {
    console.log("aaa");
    const age = document.getElementById("fage").value;
    const name = document.getElementById("fname").value;
    const fpostition = document.getElementById("fposition").value;
    const arrPicture = [
      "https://library.sportingnews.com/styles/crop_style_16_9_tablet/s3/2022-05/CristianoRonaldo%20-%20cropped.jpg?itok=HgunUgeG",
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltee41eef7e0a0e3f3/626b8172918f4e4e59121e78/GettyImages-1240053215.jpg?quality=80&width=1000&format=pjpg&auto=webp",
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4e0a5bb5ccb7b737/62279f5caf95510737333d62/neymar_psg_real.jpg?auto=webp&format=jpg&quality=100",
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3a48501789cdf113/60db790b47339c0fc01c188c/3e947186d512164cf8dbe0987a865dd2b714eea6.png?quality=80&width=1000&format=pjpg&auto=webp",
      "https://cdnimg.vietnamplus.vn/t620/uploaded/jopluat/2017_03_25/ronaldinho.jpg",
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt28d713496e7fe3df/62b37754e021f80ecf97c8cb/Zlatan_Ibrahimovic_AC_Milan_2021-22.jpg?quality=80&width=1000&format=pjpg&auto=webp",
      "https://photo-cms-sggp.zadn.vn/w580/Uploaded/2022/evofzyresfj/2021_10_13/fbcad2dx0airlxr_uzrf.jpg",
      "https://baokhanhhoa.vn/dataimages/202108//original/images5463988_Real_Madrid_l_y_g_____chi_u_m__Kylian_Mbappe_2.jpg",
      "https://img.nhandan.com.vn/Files/Images/2020/11/10/005-1605024440410.jpg",
    ];
    const randomImage = Math.floor(Math.random() * arrPicture.length);
    const CreatedPlayer = {
      img: arrPicture[randomImage],
      age: age == ""?,
      name: name == "" ? "neymar" : name,
      position: fpostition,
    };
    const created = add.push(CreatedPlayer);
    SetCreatePlay(created);
    document.getElementById("fage").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("fposition").value = "";
  };
  return (
    <div>
      <h1>Football Manager</h1>
      <div>
        <button className="addPlayer" onClick={AddPlayer}>
          Add Player +
        </button>
      </div>
      <div>
        <button className="FillPlayer" onClick={fillPlayer}>
          Fill Player
        </button>
      </div>
      <div>
        <button className="addPlayer" onClick={removePlayer}>
          Remove Player -
        </button>
      </div>
      <div className="container">
        <form action="" className="informationPlay">
          <div className="infoname">
            <div className="fname">Name</div>
            <input type="text" id="fname"></input>
          </div>
          <div className="infoage">
            <div className="fage">Age</div>
            <input type="text" id="fage"></input>
          </div>
          <div className="infoposition">
            <div className="fposition">Position</div>
            <input type="text" id="fposition"></input>
          </div>
          <div className="submit">
            <button type="button" className="submited" onClick={createPlayer}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="informationPlayer">
        {add.map((item, index) => {
          return (
            <div className="Moredetails">
              <div className="Delete" onClick={Choice} value={index}>
                x
              </div>
              <img src={item.img} alt="" />
              <div className="Age">{item.age}</div>
              <div className="Name">{item.name}</div>
              <div className="Position">{item.position}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
