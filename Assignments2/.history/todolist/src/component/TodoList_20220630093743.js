import React, { useState } from "react";
import "./Todo.css";

const TodoList = () => {
  const moretask = ["HomeWork"];
  const [task, setTask] = useState(moretask);
  const getTask = (e) => {
    if (e.key === "Enter") {
      var value = e.target.value;
      var resutl = task.push(value);
      console.log(task);
      setTask(task);
      e.target.value = "";
      console.log(task);
    }
    // console.log("aaa");
    // setTask(task.push("nnn"));
    console.log(task);
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
    </div>
  );
};

export default TodoList;