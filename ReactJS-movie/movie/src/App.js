import Header from "./layout/Header";
import "./Assests/style.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Movies from "./Components/Movies";
import TvShow from "./Components/TvShow";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" exact element={<Movies></Movies>}></Route>
            <Route path="/tv" exact element={<TvShow></TvShow>}></Route>
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}
export default App;
