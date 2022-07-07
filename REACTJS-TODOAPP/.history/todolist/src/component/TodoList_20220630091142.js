import React, { useState } from "react";
import "./Todo.css";

const TodoList = () => {
  const [task, setTask] = useState(["HomeWork"]);
  const getTask = (e) => {
    if (e.key === "Enter") {
      let value = e.target.value;
      //   const task = task.push(value);
      //   setTask(task.push(value);
      //   setTask(task.push(value));
      //   console.log(task.push(value));
      console.log(task);
    }
    console.log(value);
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
            <span>{item}</span>
          </div>
        );
      })}
      <div className="contentTask">
        <input type="radio" className="checked" name="radio" />
        <span>Task1</span>
      </div>
    </div>
  );
};

export default TodoList;