import React, { useState } from "react";
import "./Todo.css";
const TodoList = () => {
  const [task, setTask] = useState(["HomeWork"]);
  const getask = (e) => {
    if (e.key === "Enter") {
      console.log(e.value);
    }
  };
  return (
    <div className="todoContainer">
      <input
        type="text"
        id="input"
        placeholder="Enter your task here...."
      ></input>
      <div className="contentTask">
        <input
          type="radio"
          className="checked"
          name="radio"
          onkeydown={getask(this)}
        />
        <span>Task1</span>
      </div>
      <div className="contentTask">
        <input type="radio" className="checked" name="radio" />
        <span>Task1</span>
      </div>
    </div>
  );
};

export default TodoList;
