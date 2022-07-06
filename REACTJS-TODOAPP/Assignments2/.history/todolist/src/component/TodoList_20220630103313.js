import React, { useState, useEffect } from "react";
import "./Todo.css";

export const TodoList = () => {
  const moretask = ["HomeWork"];
  const [task, setTask] = useState(moretask);
  const getTask = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value;
      task.push(value);
      e.target.value = "";
      console.log(task);
      //   setTask(task);
      setTask([...task]);
    }
  };
  const click = () => {
    const element = document.getElementById("input").value;
    console.log(element);
    const addtask = task.push(element);
    console.log(task);
    setTask([...task, task]);
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
            />
            <span onClick={click}>{item}</span>
          </div>
        );
      })}
    </div>
  );
};
