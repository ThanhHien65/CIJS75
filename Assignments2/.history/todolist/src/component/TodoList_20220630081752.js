import React, { useState } from "react";
import "./Todo.css";
const TodoList = () => {
  return (
    <div className="todoContainer">
      <input
        type="text"
        id="input"
        placeholder="Enter our Task here...."
      ></input>
    </div>
  );
};

export default TodoList;
