import React, { Fragment, useEffect, useState } from "react";
import carData from "./data/carData";
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
      //console.log(jsonData);
      setCars(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  const carList = cars.map((car) => {
    return (
      <div key={car.id} className="carItem">
        <div className="carName">
          {car.year} {car.make} {car.name}
        </div>
        <div className="carImage">
          <img src={car.car_photo} alt="car1"></img>
        </div>
        <div className="carArea">
          <div>area</div>
          <div className="reserve">
            {" "}
            <a className="Reserve" onClick={() => navigateTo("/Reserve")}>
              Reserve
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="carsAvailable">
      <div className="availableTitle"> Cars Available now</div>
      <div className="availableCars">
        {carList}
        {/* <div className="carItem">
          <div key={cars.year} className="carName">
            {cars[0].year} {carData[0].make} {carData[0].name}
          </div>
          <div className="carImage">
            <img src={carData[0].image} alt="car1"></img>
          </div>
          <div className="carArea">
            <div>area</div>
            <div className="reserve">
              {" "}
              <a className="Reserve" onClick={() => navigateTo("/Reserve")}>
                Reserve
              </a>
            </div>
          </div>
        </div> */}
        {/* <div className="carItem">
          <div className="carName"></div>
          <div className="carImage">
            <img src={carData[1].image} alt="car2"></img>
          </div>
          <div className="carArea">
            <div>area</div>
            <div className="reserve">
              {" "}
              <a href="#">Reserve</a>
            </div>
          </div>
        </div> */}
        {/* <div className="carItem">
          <div className="carName">
            {carData[2].year} {carData[2].make} {carData[2].name}
          </div>
          <div className="carImage">
            <img src={carData[2].image} alt="car3"></img>
          </div>
          <div className="carArea">
            <div>area</div>
            <div className="reserve">
              {" "}
              <a href="#">Reserve</a>
            </div>
          </div>
        </div>
        <div className="carItem">
          <div className="carName">
            {carData[3].year} {carData[3].make} {carData[3].name}
          </div>
          <div className="carImage">
            <img src={carData[3].image} alt="car4"></img>
          </div>
          <div className="carArea">
            <div>area</div>
            <div className="reserve">
              {" "}
              <a href="#">Reserve</a>
            </div>
          </div>
        </div>
        <div className="carItem">
          <div className="carName">
            {carData[4].year} {carData[4].make} {carData[4].name}
          </div>
          <div className="carImage">
            <img src={carData[4].image} alt="car5"></img>
          </div>
          <div className="carArea">
            <div>area</div>
            <div className="reserve">
              {" "}
              <a href="#">Reserve</a>
            </div>
          </div>
        </div>
        <div className="carItem">
          <div className="carName">
            {carData[5].year} {carData[5].make} {carData[5].name}
          </div>
          <div className="carImage">
            <img src={carData[5].image} alt="car6"></img>
          </div>
          <div className="carArea">
            <div>area</div>
            <div className="reserve">
              {" "}
              <a href="#">Reserve</a>
            </div>
          </div>
        </div>
        <div className="carItem">
          <div className="carName">
            {carData[6].year} {carData[6].make} {carData[6].name}
          </div>
          <div className="carImage">
            <img src={carData[6].image} alt="car7"></img>
          </div>
          <div className="carArea">
            <div>area</div>
            <div className="reserve">
              {" "}
              <a href="#">Reserve</a>
            </div>
          </div>
        </div> */}
        <div className="seeMore">
          {" "}
          <button
            className="seeMore"
            onClick={() => navigateTo("/Carsavailablemore")}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
}
