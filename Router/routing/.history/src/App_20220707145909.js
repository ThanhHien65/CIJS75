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
      <nav>
        <ul>
          <li><a href="/manatee">Manatee</a></li>
          <li><a href="/narwhal">Narwhal</a></li>
          <li><a href="/whale">Whale</a></li>
        </ul>
      </nav>
      <Router>
        <Routes>
          <Route path="/manatee" element={<Manatee></Manatee>} />
          <Route path="="/narwhal" element={<Narwhal></Narwhal>} />
          <Route path="/c" element={<Whale></Whale>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
