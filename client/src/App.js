import CarsAvailableseemore from './CarsAvailableseemore'
import Header from './Header';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import CarsAvailable from './CarsAvailable';
import CarsTotal from './CarsTotal';
import Footer from './Footer';
import Loginpage from './Loginpage';
import index from './index'
import './App.css';
import Totalavailableseemore from './Totalavailableseemore';




function App() {


  return (
    <>
      <Header />
        <BrowserRouter>
          <Routes>
            <Route exact path="/login">
              element={<Loginpage />}
            </Route>
      {/* <Totalavailableseemore/> */}
      {/* <CarsAvailable /> */}
      {/* <CarsTotal /> */}
          </Routes>
        </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
