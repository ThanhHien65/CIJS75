import React from "react";
import { Link } from "react-router-dom";
import "./Expen.css";
const AddExpense = () => {
  return (
    <div className="Addexpense">
      <form action="">
        <ul>
          <li>
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Enter name here..." />
          </li>
          <li>
            <label for="Amount">Name:</label>
            <input type="text" id="Amount" placeholder="Enter amount here..." />
          </li>
          <li>
            <label for="Date">Name:</label>
            <input type="text" id="Date" pl/>
          </li>
        </ul>
      </form>
      {/* <Link to="/">Addexpense</Link> */}
    </div>
  );
};

export default AddExpense;
