import React, { useState, useEffect } from "react";
import "./Todoapp.css";
import { v4 as uuidv4 } from "uuid";

export const Todoapp = () => {
  const [task, SetTask] = useState([]);
  const [createTask, SetCreateTask] = useState();
  const getvalue = (e) => {
    const { id, value } = e.target;
    SetCreateTask({ ...createTask, id: uuidv4(), [id]: value, style: "" });
  };
  const insertodo = () => {
    SetTask([...task, createTask]);
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
  };
  const enter = (e) => {
    if (e.key === "Enter") {
      SetTask([...task, createTask]);
      document.getElementById("name").value = "";
      document.getElementById("description").value = "";
    }
  };
  const Complete = (e) => {
    task[e.target.name].style = "line-through";
    SetTask([...task]);
    e.target.remove();
  };
  const deleted = (e) => {
    task.splice(task[e.target.name], 1);
    SetTask([...task]);
  };
  const [searchTask, setSearchTask] = useState();
  const searchtask = (e) => {
    setSearchTask(e.target.value);
  };
  const [getTask, SetgetTask] = useState([]);
  const gettask = () => {
    document.getElementById("Search").value = "";
    const fillName = task.filter((item) => searchTask.includes(item.name));
    SetgetTask([...fillName]);
  };
  useEffect(() => {
    SetTask([...getTask]);
    console.log("render");
  }, [getTask]);
  return (
    <div>
      <div className="App">
        <div className="header">
          <h1>My Todos</h1>
        </div>
        <div className="detailsTodo">
          <div className="TodoName">
            <input
              type="input"
              id="name"
              className="formvalue"
              placeholder="Name"
              onChange={getvalue}
              onKeyDown={enter}
            />
          </div>
          <div className="TodoDescription">
            <input
              type="input"
              id="description"
              className="formvalue"
              placeholder="Description"
              onChange={getvalue}
              onKeyDown={enter}
            />
          </div>
          <input
            type="button"
            value="Add Todo"
            className="addTodo"
            onClick={insertodo}
          ></input>
        </div>
        <div className="insertTask">
          {task.map((item, index) => {
            return (
              <div className="HeaderTask" key={item.id}>
                <div className="NameTask">
                  <h1 style={{ textDecorationLine: `${item.style}` }}>
                    {item.name}
                  </h1>
                  <p style={{ textDecorationLine: `${item.style}` }}>
                    {item.description}
                  </p>
                </div>
                <input
                  type="button"
                  value="Complete"
                  className="modifytask"
                  onClick={Complete}
                  name={index}
                ></input>
                <input
                  type="button"
                  value="Delete"
                  className="modifytask"
                  onClick={deleted}
                  name={index}
                ></input>
              </div>
            );
          })}
        </div>
        <div className="detailsTodo">
          <div className="TodoName">
            <input
              type="input"
              id="Search"
              className="formsearch"
              placeholder="enter your search task name"
              onChange={searchtask}
              onKeyDown={enter}
            />
          </div>
          <input
            type="button"
            value="Search"
            className="addTodo"
            onClick={gettask}
          ></input>
        </div>
      </div>
    </div>
  );
};
