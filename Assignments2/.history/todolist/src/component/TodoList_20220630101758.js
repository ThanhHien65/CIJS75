import React, { useState, useEffect } from "react";
import "./Todo.css";

const TodoList = () => {
  const moretask = ["HomeWork"];
  const [task, setTask] = useState(moretask);
  const getTask = (e) => {
   console.log(e.target.value);
   setTask(task())
  };
  const click = () => {
    console.log(task);
    setTask(task);
  };
  return (
    <div className="todoContainer">
      <input
        type="text"
        id="input"
        placeholder="Enter your task here...."
        onChange={getTask}
      ></input>
      {task.map((item, index) => {
        return (
          <div className="contentTask">
            <input
              type="radio"
              className="checked"
              name="radio"
              value={index}
            />
            <span onClick={click}>{item}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
