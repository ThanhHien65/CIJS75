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
            <input type="text" id="name"  />
          </li>
          <li>
            <label for="name">Name:</label>
            <input type="text" id="name"  />
          </li>
          <li>
            <label for="Date">Name:</label>
            <input type="text" id="name"  />
          </li>
        </ul>
      </form>
      {/* <Link to="/">Addexpense</Link> */}
    </div>
  );
};

export default AddExpense;
