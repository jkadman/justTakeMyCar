import CarsAvailableseemore from "./CarsAvailableseemore";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import CarsAvailable from "./CarsAvailable";
import CarsTotal from "./CarsTotal";
import Footer from "./Footer";
import Loginpage from "./Loginpage";
import Registerpage from "./Registerpage";
import StolenCar from "./StolenCar";
import About from "./About";
import "./About.css";
import index from "./index";
import "./App.css";
import Totalavailableseemore from "./Totalavailableseemore";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<CarsAvailable />} />
        <Route exact path="/login" element={<Loginpage />} />
        <Route exact path="/register" element={<Registerpage />} />
        <Route exact path="/stolen" element={<StolenCar />} />
        <Route exact path="/about" element={<About />} />
        {/* <Totalavailableseemore/> */}
        {/* <CarsAvailable /> */}
        {/* <CarsTotal /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
