import logo from "./logo.svg";
import "./App.css";
import Manatee from "./components/Manatee/Manatee";
import Narwhal from "./components/Narwhal/Narwhal";
import Whale from "./components/Whale/Whale";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/manatee">Manatee</Link>
            </li>
            <li>
              <Link to="/narwhal">Narwhal</Link>
            </li>
            <li>
              <Link to="/whale">Whale</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/manatee" element={<Manatee></Manatee>} />
          <Route path="/narwhal" element={<Narwhal></Narwhal>} />
          <Route path="/whale" element={<Whale></Whale>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
