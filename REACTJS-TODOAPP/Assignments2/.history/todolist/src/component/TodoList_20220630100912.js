import React, { useState, useEffect } from "react";
import "./Todo.css";

const TodoList = () => {
  const moretask = ["HomeWork"];
  const [task, setTask] = useState(moretask);
  const getTask = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value;
      //   console.log(task);
      //   setTask(task.push(value));
      task.push(value);
      e.target.value = "";
      console.log(task);
      //   const array = [...task, value];
      //   console.log(array);
      //   setTask(task.push("aaa"));
    }
    // console.log(task);
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

export default TodoList;
