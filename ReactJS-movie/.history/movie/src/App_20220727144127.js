import { Header } from "./layout/Header";
import "./Assests/style.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Route path="/" etr></Route>
      </Router>
    </div>
  );
}
export default App;
