import React, { useState } from "react";
import "./Reservepage.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FetchData from "./hooks/fetchdata";

export default function Reservepage() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const [userData, setUserData] = useState(null);

  const handleUserData = (data) => {
    setUserData(data);
  };

  const navigate = useNavigate();

  const userId = userData?.user?.id;
  const userEmail = userData?.user?.email;

  const [reserve, setReserve] = useState({
    car_id: "",
    user_id: "",
    booking_start: "",
    booking_end: "",
    good_state_start: "",
    good_state_end: "",
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result;
        setReserve((prevState) => ({ ...prevState, car_photo: dataUrl }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReserve((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const location = useLocation();

  if (location.state && location.state.car) {
    const car = location.state.car;

    const handleReserveClick = async (event) => {
      const emailSubject = "Car Reservation";
      const emailBody = `
        Make: ${car.make}
        Name: ${car.name}
        Street: ${car.street}
        Price Per Day: ${car.price_per_day}
        Start Date: ${startDate ? startDate.toDateString() : ""}
        End Date: ${endDate ? endDate.toDateString() : ""}
      `;

      const mailtoUrl = `mailto:${car.email}?subject=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(emailBody)}`;

      window.location.href = mailtoUrl;
      setShowPopup(true);
      event.preventDefault(); // Prevent form submission (for demo purposes)
      try {
        const {
          car_id,
          user_id,
          booking_start,
          booking_end,
          good_state_start,
          good_state_end,
        } = reserve;

        const body = {
          car_id: car.id, //car.id works when logged in
          user_id: userId,
          booking_start: startDate,
          booking_end: endDate,
          good_state_start: true,
          good_state_end: true,
        };

        const response = await fetch("http://localhost:5001/Reserve", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        console.log(response);
        navigate("/Userpage");
      } catch (err) {
        console.error(err.message);
      }
    };

    const closePopup = () => {
      setShowPopup(false);
    };

    const handleDateChange = (start, end) => {
      setStartDate(start);
      setEndDate(end);

      if (start && end) {
        const timeDiff = end.getTime() - start.getTime();
        const numDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        const price = parseFloat(car.price_per_day);
        const totalPrice = price * numDays;
        setTotalPrice(totalPrice);
      } else {
        setTotalPrice(0);
      }
    };
    // example of how to access user data
    console.log('RPUS', userData?.user?.id)
    return (
      <div id="container1">
        <FetchData onDataReceived={handleUserData} />
        <div id="header1">
          <div className="header12">{car.make}</div>
          <div className="header123">{car.name}</div>
        </div>

        <div id="image">
          <img src={car.car_photo} alt="car"></img>
        </div>

        <div id="footer1">
          <div className="item1">
            <h4>{car.street}</h4>
          </div>
          <div className="item1">
            <h4>{car.price_per_day}</h4>
          </div>
          {totalPrice}
          <div className="datePicker">
            <DatePicker
              selected={startDate}
              onChange={(date) => handleDateChange(date, endDate)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Start Date"
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => handleDateChange(startDate, date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="End Date"
            />
          </div>

          <button
            id="reserve"
            className="datePicker"
            onClick={handleReserveClick}
          >
            Reserve
          </button>
        </div>

        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h1>Reservation Confirmation</h1>
              <p>
                Your reservation request has been sent to the owner of the car.
                Total price: {totalPrice}
              </p>
              <button onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return <div>NO car found. Go back.</div>;
  }
}
