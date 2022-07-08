import React from "react";
import "./Expen.css";
import { AddExpense, useCounter } from "./AddExpense";
import { useBetween } from "use-between";
const get = () => {
  console.log(useCounter());
};
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
          <div className="infordate">
            <p value="Jan">January</p>
            <p>2022</p>
            <h4>16</h4>
          </div>
          <div className="nameexpanse">
            <h1 onClick={get}>Some Book</h1>
          </div>
        </div>
        <div className="amountenxpanse">$ 50</div>
      </div>
    </div>
  );
};

export default Detailsexpense;
