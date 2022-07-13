import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import {uuid} from 'uuidv4'
import "./Expen.css";
import { ExpenseList } from "./Expenselist";
export const AddExpense = () => {
  const [Expanse, SetExpanse] = useRecoilState(ExpenseList);
  const [CreateExpanse, SetCreateExpanse] = useState();
  const getinfomation = (e) => {
    const { id, value } = e.target;
    SetCreateExpanse({ ...CreateExpanse, [id]: value,id:uuid() });
  };
  const Getvalue = (e) => {
    SetExpanse([...Expanse, CreateExpanse]);
    console.log(Expanse);
  };
  return (
    <div className="Addexpense">
      <form action="">
        <ul>
          <li>
            <label for="name" className="information">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name here..."
              onChange={getinfomation}
            />
          </li>
          <li>
            <label for="Amount" className="information">
              Amount
            </label>
            <input
              type="text"
              id="Amount"
              placeholder="Enter amount here..."
              onChange={getinfomation}
            />
          </li>
          <li>
            <label for="date" className="information">
              date
            </label>
            <input
              type="date"
              id="date"
              placeholder="dd/mm/yyyy"
              onChange={getinfomation}
            />
          </li>
        </ul>
      </form>
      <div className="submit">
        <div className="add" onClick={Getvalue}>
          add
        </div>
        <Link to="/">
          <div className="cancel">cancel</div>
        </Link>
      </div>
    </div>
  );
};
