import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Bottom from "./Components/Bottom";
import Header from "./Components/Header";
import Home from "./Screens/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Screens/About/About";
import Video from "./Screens/Video/Video";
import Contact from "./Screens/Contact/Contact";
import Investor from "./ScreenComponents/InvestorComponents/Annualreport";
import Training from "./Screens/Training/Training";
import Bookingpage from "./ScreenComponents/TrainingComponents/Bookingpage";
import Slotpage from "./ScreenComponents/TrainingComponents/Slotpage";
import Events from "./Screens/Events/Events";
import Upcomingevents from "./ScreenComponents/EventsComponents/Upcomingevents";
import AnnualReturns from "./ScreenComponents/Annualreturns/AnnualReturns";
import { useEffect } from "react";
import axios from "axios";
import AnnualReturn from "./ScreenComponents/Annualreturns/AnnualReturns";
import AnnualReport from "./ScreenComponents/InvestorComponents/Annualreport";
import Newsphoto from "./ScreenComponents/NewsComponent/Newsphoto";

// export const captchaKey = "6LevTFsqAAAAAD5gvKBNZTzNtgPHTX38UAlQdV_E" // local
export const captchaKey = "6LeORlsqAAAAALY9tTnLPSpVkAS56yymZ3G-ipgy" // server
function App() {

  useEffect(()=>{
    console.log("process.env.REACT_APP_API_BASE_URL", process.env.REACT_APP_API_BASE_URL)
    axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL
  },[])
  return (
    <div className="App">

      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/awarnessvideo' element={<Video/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/annualreport' element={<AnnualReport/>}/>
        <Route path='/annualreturn' element={<AnnualReturn/>}/>
        <Route path='/training' element={<Training/>}/>
        <Route path='/bookingpage' element={<Bookingpage/>}/>
        <Route path="/slotpage" element={<Slotpage/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='upcomingevents' element={<Upcomingevents/>}/>
        <Route path='news' element={<Newsphoto/>}/>
      </Routes>
      <Bottom/>
      </BrowserRouter>
      

      
    </div>
  )
}

export default App;
