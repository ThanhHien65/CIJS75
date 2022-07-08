import React from "react";
import { Link } from "react-router-dom";
import "./src/components/layouts/expen.css";
const NewExpense = () => {
  return (
    <div className="NewExpense">
      <Link to="/add">NewExpense</Link>
    </div>
  );
};

export default NewExpense;
