import React from "react";
import "./Expen.css";
import { useRecoilValue, useRecoilState } from "recoil";
import { ExpenseList, EpanseData, ExpanseDate } from "./Expenselist";
const Detailsexpense = () => {
  const GetExpanselist = useRecoilValue(EpanseData);
  const ExpanseDateList = useRecoilValue(ExpanseDate);
  const [Expanse, SetExpanse] = useRecoilState(ExpenseList);
  const fillyear = (e) => {
    const fill = Expanse.find((item) => item.date == "2022-07-13");
    const result = 
    // SetExpanse([]);
    console.log(Expanse);
    console.log(fill);
  };
  return (
    <div className="detailsexpense">
      <div className="chooseyear">
        <div className="filerrby">fillter by year</div>
        <div className="selectyear">
          <select id="Years" onClick={fillyear}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2022">2023</option>
          </select>
        </div>
      </div>
      <div className="detailsMonth">
        {ExpanseDateList.map((item) => {
          return (
            <div className="monthparameter" key={item.id}>
              <div
                className="partameter"
                style={{
                  background: `linear-gradient(to top, blue ${item.chart}%, #baa5ed 0%)`,
                }}
                value={item.month}
              ></div>
              <div className="month">{item.month}</div>
            </div>
          );
        })}
      </div>
      {GetExpanselist.map((item, index) => {
        return (
          <div className="insertexpense" key={index}>
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
