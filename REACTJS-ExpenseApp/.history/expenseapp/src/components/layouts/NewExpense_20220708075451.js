import React from "react";
import { Link } from "react-router-dom";
import "./"
const NewExpense = () => {
  return (
    <div>
      <Link to="/add">NewExpense</Link>
    </div>
  );
};

export default NewExpense;
