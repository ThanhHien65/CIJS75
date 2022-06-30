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
        <input type="radio" className="checked" /> <span>Task1dddddd</span>
      </div>
      <div className="contentTask">
        <input type="radio" className="checked" /> <span>Task1</span>
      </div>
    </div>
  );
};

export default TodoList;
