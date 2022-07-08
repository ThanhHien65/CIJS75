import React from "react";
import { Link } from "react-router-dom";
import "./Expen.css";
const NewExpense = () => {
  return (
    <div className="newexpense">
      <Link to="/add"></Link>
    </div>
  );
};

export default NewExpense;
