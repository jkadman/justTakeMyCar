import React from "react";
import carData from "./data/carData";
import useNavigation from "./hooks/navigate";

export default function CarsTotal() {
  const { navigateTo } = useNavigation();
  return (
    <div>
      <div className="totalTitle"> Cars in stock</div>
      <div className="registeredCars">
        <div className="carItem">
          <div className="carName">
            {carData[7].year} {carData[7].make} {carData[7].name}
          </div>
          <div className="carImage">
            <img src={carData[7].image} alt="car8"></img>
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
            {carData[8].year} {carData[8].make} {carData[8].name}
          </div>
          <div className="carImage">
            <img src={carData[8].image} alt="car9"></img>
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
            {carData[9].year} {carData[9].make} {carData[9].name}
          </div>
          <div className="carImage">
            <img src={carData[9].image} alt="car10"></img>
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
            {carData[10].year} {carData[10].make} {carData[10].name}
          </div>
          <div className="carImage">
            <img src={carData[10].image} alt="car11"></img>
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
            {carData[11].year} {carData[11].make} {carData[11].name}
          </div>
          <div className="carImage">
            <img src={carData[11].image} alt="car12"></img>
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
            {carData[12].year} {carData[12].make} {carData[12].name}
          </div>
          <div className="carImage">
            <img src={carData[12].image} alt="car13"></img>
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
            {carData[13].year} {carData[13].make} {carData[13].name}
          </div>
          <div className="carImage">
            <img src={carData[13].image} alt="car14"></img>
          </div>
          <div className="carArea">
            <div>area</div>
            <div className="reserve">
              {" "}
              <a href="#">Reserve</a>
            </div>
          </div>
        </div>
        <div className="seeMore">
          {" "}
          <button
            className="seeMore"
            onClick={() => navigateTo("/Totalavailableseemore")}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
}
