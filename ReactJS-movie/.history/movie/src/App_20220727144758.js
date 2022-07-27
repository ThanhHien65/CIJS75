import Header from "./layout/Header";
import "./Assests/style.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Movies from "./Components/Movies";
import TvShow from "./Components/TvShow";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact element={<Movies></Movies>}></Route>
        <Route path="/tv" exact element={<TvShow></TvShow>}></Route>
        <Routes></Routes>
      </Router>
    </div>
  );
}
export default App;
