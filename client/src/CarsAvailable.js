import React from "react";
import carData from "./data/carData";
import useNavigation from './hooks/navigate';
import Reservepage from "./Reservepage";


export default function CarsAvailable() {
  const { navigateTo } = useNavigation();
  return (
    <div className="carsAvailable">
      <div className="availableTitle"> Cars Available now</div>
      <div className="availableCars">
        <div className="carItem">
          <div className="carName">
            {carData[0].year} {carData[0].make} {carData[0].name}
          </div>
          <div className="carImage">
            <img src={carData[0].image} alt="car1"></img>
          </div>
          <div className="carArea">
            <div>area</div>
            <div className="reserve">
              {" "}
              <a className="Reserve" onClick={() => navigateTo('/Reserve')}>Reserve</a>
              {/* <a href="#">Reserve</a> */}
            </div>
          </div>
        </div>
        <div className="carItem">
          <div className="carName">
            {carData[1].year} {carData[1].make} {carData[1].name}
          </div>
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
        </div>
        <div className="carItem">
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
        </div>
        <div className="seeMore">
          {" "}
          {/* <a href="#">See more</a> */}
          <a className="seeMore" onClick={() => navigateTo('/Carsavailablemore')}>see more</a>
        </div>
      </div>
    </div>
  );
}
