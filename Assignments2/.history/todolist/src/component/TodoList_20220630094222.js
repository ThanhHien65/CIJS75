import React, { useState } from "react";
import "./Todo.css";

const TodoList = () => {
  const moretask = ["HomeWork"];
  const [task, setTask] = useState(moretask);
  const getTask = (e) => {
    if (e.key === "Enter") {
    //   var value = e.target.value;
    //   console.log(task);
    //   setTask(task.push(value));
    //   e.target.value = "";
    //   console.log(task);
    }
  };
  return (
    <div className="todoContainer">
      <input
        type="text"
        id="input"
        placeholder="Enter your task here...."
        onKeyDown={getTask}
      ></input>
      {moretask.map((item, index) => {
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
    </div>
  );
};

export default TodoList;
