import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Expen.css";
export const getinfomation = (e) => {
  const { id, value } = e.target;
  SetExpanse({...Expanse,[id]})
};
export const Getvalue = (e) => {
  console.log("aaa");
  const [Expanse, SetExpanse] = useState();
  return (
    <div className="insertexpense">
      <div className="modetailsexpanse">
        <div className="infordate">
          <p value="Jan">January</p>
          <p>2022</p>
          <h4>16</h4>
        </div>
        <div className="nameexpanse">
          <h1>Some Book</h1>
        </div>
      </div>
      <div className="amountenxpanse">$ 50</div>
    </div>
  );
};
export const AddExpense = () => {
  return (
    <div className="Addexpense">
      <form action="">
        <ul>
          <li>
            <label for="name" className="information">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name here..."
              onChange={getinfomation}
            />
          </li>
          <li>
            <label for="Amount" className="information">
              Amount
            </label>
            <input
              type="text"
              id="Amount"
              placeholder="Enter amount here..."
              onChange={getinfomation}
            />
          </li>
          <li>
            <label for="Date" className="information">
              Date
            </label>
            <input
              type="text"
              id="Date"
              placeholder="dd/mm/yyyy"
              onChange={getinfomation}
            />
          </li>
        </ul>
      </form>
      <div className="submit">
        <div className="add" onClick={Getvalue}>
          add
        </div>
        <Link to="/">
          <div className="cancel">cancel</div>
        </Link>
      </div>
    </div>
  );
};
