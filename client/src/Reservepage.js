import React, { useState } from 'react';
import './Reservepage.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

export default function Reservepage() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleReserveClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div id='container1'>
      <div id='header1'>
        <div className='header12'>Car name</div>
        <div className='header123'>Username</div>
      </div>

      <div id='image'></div>

      <div id='footer1'>
        <div className='item1'>
          <h4>Location</h4>
        </div>
        <div className='item1'>
          <h4>Price</h4>
        </div>
        <div className='datePicker'>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText='Start Date'
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText='End Date'
          />
        </div>

        <button id='reserve' className='datePicker' onClick={handleReserveClick}>
          Reserve
        </button>
      </div>


      {showPopup && (
        <div className='popup'>
          <div className='popup-content'>
            <h1>Reservation Confirmation</h1>
            <p>Your reservation request has been sent to the owner of the car.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
