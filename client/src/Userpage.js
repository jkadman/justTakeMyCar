import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Userpage.css";
import FetchData from "./hooks/fetchdata";

export default function Userpage(props) {
  // attempt to display loading while the data from the page is rendering
  const [userData, setUserData] = useState({});
  const [userCars, setUserCars] = useState([]);
  const [useRes, setuseRes] = useState([]);

  const handleUserData = (data) => {
    setUserData(data);
  };

  // example of how to structure asynchronous variables
  const userEmail = userData?.user?.email;
  const userId = userData?.user?.id;
  console.log(userId);

  useEffect(() => {
    if (userData) {
      fetchUserCars();
      getReservedCars();
    }
  }, [userData]);

  const fetchUserCars = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("/userCars", {
        headers: {
          Authorization: `Bearer ${token}`,
          "X-User-ID": userId,
        },
      });
      setUserCars(response.data);
      console.log("response", response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getReservedCars = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("/userReserved", {
        headers: {
          Authorization: `Bearer ${token}`,
          "X-User-ID": userId,
        },
      });
      setuseRes(response.data);
      console.log("response", response.data);
    } catch (err) {
      console.error(err);
    }
  };
  const reservUser = useRes.map((res, index) => {
    return (
      <div key={index} className="rentedcars">
        <div className="rentedName">
          {res.year} {res.make} {res.name}
        </div>
        <div className="rentedImg">
          <img src={res.car_photo} alt="car1"></img>
        </div>
        <div className="rentedfoote">
          <div>{res.street}</div>
          <div className="reserve"> Reserved until {res.booking_end}</div>
        </div>
        <div></div>
      </div>
    );
  });
  return (
    <div id="body">
      <FetchData onDataReceived={handleUserData} />
      {userData ? (
        <div id="user">
          <h2> Car history for User: {userEmail}</h2>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <h2>Rented Cars</h2>
      <div className="TotalCarsmore">{reservUser}</div>

      <h2>My cars</h2>
      <div id="CarCon">
        {userCars.map((car) => (
          <div key={car.id} className="myCars">
            <div className="ownedcars">
              <div className="rentedName"> {car.name}</div>
              <div className="rentedImg">
                <img src={car.car_photo} alt={car.name} />
              </div>
              <div className="rentedfooter"> {car.street} </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
