// import logo from "./logo.svg";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Bottom from "./Components/Bottom";
import Header from "./Components/Header";
import Home from "./Screens/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Screens/About/About"
// import Homecounter from "./ScreenComponents/HomeComponents/Homecounter";
// import MainBanner from "./ScreenComponents/Home/Main Banner/MainBanner";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
     
      {/* </> */}
      <Bottom/>

      
    </div>
  )
}

export default App;
