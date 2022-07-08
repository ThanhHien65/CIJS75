import React from "react";
import { Link } from "react-router-dom";
import "./Expen.css";
const NewExpense = () => {
  return (
    <div className="new">
      <Link to="/add">NewExpense</Link>
    </div>
  );
};

export default NewExpense;
