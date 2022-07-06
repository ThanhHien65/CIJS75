import React, { useState, useEffect } from "react";
import "./Todo.css";

export const TodoList = () => {
  const [task, setTask] = useState(["HomeWork"]);
  const getTask = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value;
      task.push(value);
      e.target.value = "";
      setTask([...task]);
    }
  };
  const taskdone = (e) => {
    console.log("aaa");
    console.log(e.target.getAttribute("value"));
    const index = e.target.getAttribute("value");
  };
  return (
    <div className="todoContainer">
      <input
        type="text"
        id="input"
        placeholder="Enter your task here...."
        onKeyDown={getTask}
      ></input>
      {task.map((item, index) => {
        return (
          <div className="contentTask">
            <input
              type="radio"
              className="checked"
              name="radio"
              value={index}
              onClick={taskdone}
            />
            <span>{item}</span>
          </div>
        );
      })}
      <div className="totaltask">{task.length} tasks left!</div>
    </div>
  );
};
