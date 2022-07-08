import React from "react";
import "./Expen.css";
const Detailsexpense = () => {
  const informationMonth = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  return (
    <div className="detailsexpense">
      <div className="chooseyear">
        <div className="filerrby">fillter by year</div>
        <div className="selectyear">
          <select id="Years">
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
      <div className="detailsMonth">
        {informationMonth.map((item, index) => {
          return (
            <div className="monthparameter" key={index}>
              <div className="partameter"></div>
              <div className="month">{item}</div>
            </div>
          );
        })}
      </div>
      <div className="insertexpense">
        <div className="modetailsexpanse">
          <div className="infordate"></div>
          <div className="nameexpanse"></div>
        </div>
        <div className="amountenxpanse"></div>
      </div>
    </div>
  );
};

export default Detailsexpense;
