import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import "./Userpage.css";
import FetchData from "./hooks/fetchdata";

export default function Userpage(props) {
  // attempt to display loading while the data from the page is rendering
  const [userData, setUserData] = useState({});
  const [userCars, setUserCars] = useState([]);

  const handleUserData = (data) => {
    setUserData(data)
  }

  // example of how to structure asynchronous variables
  const userEmail = userData?.user?.email;
  const userId = userData?.user?.id;
  console.log(userId);

  useEffect(() => {
    if (userData) {
      fetchUserCars();
    }
  }, [userData]);

  const fetchUserCars = async () => {
    try {
      const token = localStorage.getItem("token");
      const user = userId;
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
  }

 

  const fetchUserReso = async () => {};

  return (
    <div id="body">
      <FetchData onDataReceived={handleUserData} />
      {userData ? (
        <div id="user">
          <h2>User Name</h2>
          <p>Email: {userEmail}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <h2>Rented Cars</h2>
      <div id="rentedCon">
        <div className="rentedcars">
          <div className="rentedName"> {userEmail} </div>
          <div className="rentedImg"> img goes here</div>
          <div className="rentedfooter"> Reserve </div>
        </div>

        <div className="rentedcars">
          <div className="rentedName"> car name</div>
          <div className="rentedImg"> img goes here</div>
          <div className="rentedfooter"> Reserve </div>
        </div>

        <div className="rentedcars">
          <div className="rentedName"> car name</div>
          <div className="rentedImg"> img goes here</div>
          <div className="rentedfooter"> Reserve </div>
        </div>
      </div>

      <h2>My cars</h2>
      <div id="CarCon">
        {userCars.map((car) => (
          <div key={car.id} className="myCars">
            <div className="ownedcars">
              <div className="rentedName"> {car.name}</div>
              <div className="rentedImg">
                {" "}
                <img src={`/pictures/${car.car_photo}`} alt={car.name} />
              </div>
              <div className="rentedfooter"> Reserve </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
