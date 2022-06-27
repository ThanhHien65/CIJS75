import "./App.css";
import Header from "./component/header/Header";
import Body from "./component/body/Body";
import  Footer  from "./component/footer/Footer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <div className="body">
        <Body></Body>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
