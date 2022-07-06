import React, { useState } from "react";
import "./Todo.css";
const TodoList = () => {
  return (
    <div className="todoContainer">
      <input
        type="text"
        id="input"
        placeholder="Enter your task here...."
      ></input>
      <div className="contentTask">
        <button></button>
      </div>
    </div>
  );
};

export default TodoList;
