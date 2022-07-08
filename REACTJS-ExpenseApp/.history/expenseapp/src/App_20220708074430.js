import logo from "./logo.svg";
import "./App.css";
import NewExpense from "./components/layouts/NewExpense";
import AddExpense from "./components/layouts/AddExpense";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      Test
      <Router>
        <NewExpense></NewExpense>
        <AddExpense></AddExpense>
        <Routes>
          <Route path="/" element={<NewExpense></NewExpense>}></Route>
          <Route path="/add" element={<AddExpense></AddExpense>}></Route>
        </Routes>
        <div className="modetail">Test</div>
      </Router>
    </div>
  );
}

export default App;
