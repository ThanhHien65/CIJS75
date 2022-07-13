import React from "react";
import "./Expen.css";
import { useRecoilValue, useRecoilState } from "recoil";
import { EpanseData } from "./Expenselist";
import moment from "moment";
const Detailsexpense = () => {
  const GetExpanselist = useRecoilValue(EpanseData);
  const getvalue = () => {
    console.log(GetExpanselist);
  };
  const informationMonth = moment.monthsShort();
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
              <div className="partameter" style={{color: "red"}}value={item}></div>
              <div className="month">{item}</div>
            </div>
          );
        })}
      </div>
      {GetExpanselist.map((item) => {
        return (
          <div className="insertexpense" key={item.id}>
            <div className="modetailsexpanse">
              {[{ ...item.date }].map((item) => {
                return (
                  <div className="infordate">
                    <p value="Jan">{item.month}</p>
                    <p>{item.year}</p>
                    <h4>{item.day}</h4>
                  </div>
                );
              })}
              <div className="nameexpanse">
                <h1>{item.name}</h1>
              </div>
            </div>
            <div className="amountenxpanse">$ {item.Amount}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Detailsexpense;
