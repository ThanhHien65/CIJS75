import React from "react";
import { Link } from "react-router-dom";
import "./Expen.css";
const AddExpense = () => {
  return (
    <div className="Addexpense">
      <form action="">
        <ul>
          <li>
            <label for="name" className="information">
              Name
            </label>
            <input type="text" id="name" placeholder="Enter name here..." />
          </li>
          <li>
            <label for="Amount" className="information">
              Amount
            </label>
            <input type="text" id="Amount" placeholder="Enter amount here..." />
          </li>
          <li>
            <label for="Date" className="information">
              Date
            </label>
            <input type="text" id="Date" placeholder="dd/mm/yyyy" />
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
