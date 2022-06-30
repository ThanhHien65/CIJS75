import React, { useState } from "react";
import "./Todo.css";

const TodoList = () => {
  const [task, setTask] = useState(["HomeWork"]);
  const getTask = (e) => {
    // if (e.key === "Enter") {
    //   var value = e.target.value;
    //   //   setTask(task.push(value));
    //   //   task.push(value);
    //   //   console.log(task)
    //   var resutl = task.push("aaaa");
    //   //   setTask(task.push("aaaa"));
    //   console.log(task);
    //   e.target.value = "";
    // }
    confirm("aaa");
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
      {/* <div className="contentTask">
        <input type="radio" className="checked" name="radio" />
        <span>Task1</span>
      </div> */}
    </div>
  );
};

export default TodoList;