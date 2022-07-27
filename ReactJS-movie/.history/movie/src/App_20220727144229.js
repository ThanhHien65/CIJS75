import { Header } from "./layout/Header";
import "./Assests/style.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact element={<Header></Header>}></Route>
        <Route path="/tv"></Route>
      </Router>
    </div>
  );
}
export default App;
