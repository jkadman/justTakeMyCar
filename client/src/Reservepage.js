import React, { useState } from "react";
import "./Reservepage.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useLocation } from "react-router-dom";

export default function Reservepage() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const location = useLocation();

  if (location.state && location.state.car) {
    const car = location.state.car;

    const handleReserveClick = () => {
      setShowPopup(true);
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

    return (
      <div id="container1">
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
