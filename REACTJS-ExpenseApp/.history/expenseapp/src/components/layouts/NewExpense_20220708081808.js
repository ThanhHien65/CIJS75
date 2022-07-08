import React from "react";
import { Link } from "react-router-dom";
import "./expen.css";
const NewExpense = () => {
  return (
    <div className="NewExpense">
      <Link to="/add">NewExpense</Link>
    </div>
  );
};

export default NewExpense;
