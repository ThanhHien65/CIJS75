import logo from "./logo.svg";
import "./App.css";
import Manatee from "./components/Manatee/Manatee";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      {/* <Manatee /> */}

      <Router>
        <Switch>
          <Route path="/" component={<Manatee></Manatee>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;