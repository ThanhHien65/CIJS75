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
        <Routes>
          <Route path="/a" element={<Manatee></Manatee>} />
          <Route path="/b" element={<Narwhal></Narwhal>} />
          <Route path="/c" element={<W></W>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;