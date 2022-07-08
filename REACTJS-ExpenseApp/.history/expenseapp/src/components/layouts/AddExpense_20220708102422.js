import React from "react";
import { Link } from "react-router-dom";
import "./Expen.css";
const AddExpense = () => {
  const getinfomation = (e) => {
    console.log(e.target);
    const {id,value} = e.tar
  };
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
        <div className="add">add</div>
        <Link to="/">
          <div className="cancel">cancel</div>
        </Link>
      </div>
    </div>
  );
};

export default AddExpense;
