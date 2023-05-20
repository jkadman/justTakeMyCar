import React, { useEffect, useState } from "react";
import useNavigation from "./hooks/navigate";
import Reservepage from "./Reservepage";
import { useNavigate } from "react-router-dom";

export default function CarsAvailable() {
  const navigate = useNavigate();
  const { navigateTo } = useNavigation();
  const [cars, setCars] = useState([]);
  const getCars = async () => {
    try {
      const response = await fetch("http://localhost:5001");
      const jsonData = await response.json();
      console.log(jsonData);
      setCars(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleReserveClick = (car) => {
    navigate("/Reserve", { state: { car } });
  };

  useEffect(() => {
    getCars();
  }, []);

  const carListC = cars.map((car) => {
    return (
      <div key={car.id} className="carItem">
        <div className="carName">
          {car.year} {car.make} {car.name}
        </div>
        <div className="carImage">
          <img src={car.car_photo} alt="car1"></img>
        </div>
        <div className="carArea">
          <div>{car.street}</div>
          <div className="reserve">
            <a className="Reserve" onClick={() => handleReserveClick(car)}>
              Reserved
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="totalTitle"> Cars in stock</div>
      <div className="registeredCars">
        {carListC}
        <div className="seeMore">
          <button
            className="seeMore"
            onClick={() => navigate("/Totalavailableseemore")}
          >
            See More
          </button>
        </div>
        ;
      </div>
    </div>
  );
}
