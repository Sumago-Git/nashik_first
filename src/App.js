// import logo from "./logo.svg";
import "./App.css";
import Bottom from "./Components/Bottom";
import Header from "./Components/Header";
import Home from "./Screens/Home/Home";
import Homecounter from "./Components/Homecounter";
// import MainBanner from "./ScreenComponents/Home/Main Banner/MainBanner";


function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <Bottom/>
      <Homecounter/>
      
    </div>
  )
}

export default App;
