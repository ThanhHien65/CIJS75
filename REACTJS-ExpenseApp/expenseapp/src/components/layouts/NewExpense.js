import React from "react";
import { Link } from "react-router-dom";
import "./Expen.css";
const NewExpense = () => {
  return (
    <div className="NewExpense">
      <Link to="/add">add new expense</Link>
    </div>
  );
};

export default NewExpense;
