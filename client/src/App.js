import CarsAvailableseemore from "./CarsAvailableseemore";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import CarsAvailable from "./CarsAvailable";
import CarsTotal from "./CarsTotal";
import Footer from "./Footer";
import Loginpage from "./Loginpage";
import Registerpage from "./Reservepage";
import StolenCar from "./StolenCar";
import About from "./About";
import "./About.css";
import "./App.css";
import Totalavailableseemore from "./Totalavailableseemore";
import Registercar from "./Registercar";
import Registerform from "./Registerform";
import Reservepage from "./Reservepage";
import Userpage from "./Userpage";
import map from "./googleMap.js";
import { GoogleMap } from "@react-google-maps/api";

function App() {
  return (
    <div className="app-container">
      <Header />

      <div className="component-spacing">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CarsAvailable />
                <CarsTotal />
              </>
            }
          />
          <Route
            exact
            path="/Totalavailableseemore"
            element={<Totalavailableseemore />}
          />
          <Route
            exact
            path="/Carsavailablemore"
            element={<CarsAvailableseemore />}
          />
          <Route exact path="/Userpage" element={<Userpage />} />
          <Route exact path="/login" element={<Loginpage />} />
          <Route exact path="/register" element={<Registerform />} />
          <Route exact path="/stolen" element={<StolenCar />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/Registercar" element={<Registercar />} />
          <Route exact path="/Reserve" element={<Reservepage />} />
          <Route exact path="/map" element={<GoogleMap />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
