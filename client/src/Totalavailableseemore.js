import React, { useEffect, useState } from "react";
import useNavigation from "./hooks/navigate";
import Reservepage from "./Reservepage";
import { useNavigate } from "react-router-dom";
import "./Totalavailableseemore.css";

export default function TotalAvailable() {
  const navigate = useNavigate();
  const { navigateTo } = useNavigation();
  const [reserved, setReserved] = useState([]);
  const getRes = async () => {
    try {
      const response = await fetch(
        "http://localhost:5001/Totalavailableseemore"
      );
      const jsonData = await response.json();
      console.log(jsonData);
      setReserved(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  // const handleReserveClick = (car) => {
  //   navigate("/Reserve", { state: { car } });
  // };

  useEffect(() => {
    getRes();
  }, []);

  const reservedCars = reserved.map((reserve, index) => {
    return (
      <div key={index} className="carItem">
        <div className="carName">
          {reserve.year} {reserve.make} {reserve.name}
        </div>
        <div className="carImage">
          <img src={reserve.car_photo} alt="car1"></img>
        </div>
        <div className="carArea">
          <div>{reserve.street}</div>
          <div className="reserve"> Reserved until {reserve.booking_end}</div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="totalTitle"> Cars in stock</div>
      <div className="TotalCarsmore">{reservedCars}</div>
    </div>
  );
}
