import "./App.css";
import NewExpense from "./components/layouts/NewExpense";
import AddExpense from "./components/layouts/AddExpense";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Detailsexpense from "./components/layouts/Detailsexpense";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <NewExpense></NewExpense> */}
        <Routes>
          <Route path="/" element={<NewExpense></NewExpense>}></Route>
          <Route path="/add" element={<AddExpense></AddExpense>}></Route>
        </Routes>
        <Detailsexpense></Detailsexpense>
      </Router>
    </div>
  );
}

export default App;
