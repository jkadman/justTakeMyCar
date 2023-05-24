import React, { useEffect, useState } from "react";
import useNavigation from "./hooks/navigate";
import Reservepage from "./Reservepage";
import { useNavigate } from "react-router-dom";
import "./CarsAvailableseemore.css";

export default function TotalAvailable() {
  const navigate = useNavigate();
  const { navigateTo } = useNavigation();
  const [available, setAvailable] = useState([]);
  const getAvailable = async () => {
    try {
      const response = await fetch(
        "http://localhost:5001/CarsAvailableseemore"
      );
      const jsonData = await response.json();
      console.log(jsonData);
      setAvailable(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleReserveClick = (car) => {
    navigate("/Reserve", { state: { car } });
  };

  useEffect(() => {
    getAvailable();
  }, []);

  const availableCars = available.map((available, index) => {
    return (
      <div key={index} className="carItem">
        <div className="carName">
          {available.year} {available.make} {available.name}
        </div>
        <div className="carImage">
          <img src={available.car_photo} alt="car1"></img>
        </div>
        <div className="carArea">
          <div>{available.street}</div>
          <div className="reserve">
            <a
              className="Reserve"
              onClick={() => handleReserveClick(available)}
            >
              Reserve
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="availableCarsmore">{availableCars}</div>
    </div>
  );
}
