import "./App.css";
import NewExpense from "./components/layouts/NewExpense";
import { AddExpense } from "./components/layouts/AddExpense";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Detailsexpense from "./components/layouts/Detailsexpense";
import Test from "./components/layouts/Test";
import {RecoilRoot} from "recoil"
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          {/* <NewExpense></NewExpense> */}
          <Routes>
            <Route path="/" exact element={<NewExpense></NewExpense>}></Route>
            <Route path="/add" exact element={<AddExpense></AddExpense>}></Route>
          </Routes>
          <Detailsexpense></Detailsexpense>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
