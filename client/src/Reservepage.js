import React from 'react';
import './Reservepage.css';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

export default function Reservepage() {
  const handleReserveClick = () => {
    console.log('Reserve button clicked!');
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <div id='container1'>
      <div id='header1'>
        <div className='header12'>Car name </div>
        <div className='header12'>Username</div>
      </div>

      <div id='image'></div>

      <div id='footer1'>
        <div className="item1">
          <h4>Location</h4>
        </div>
        <div className="item1">
          <h4>Price</h4>
        </div>
        <div className="datePicker">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Start Date"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="End Date"
          />
        </div>

        <button id='reserve'className="datePicker" onClick={handleReserveClick}> Reserve </button>


      </div>
    </div>
  );
}
