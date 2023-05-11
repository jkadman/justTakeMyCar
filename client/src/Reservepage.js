import React from 'react';
import './Reservepage.css';

export default function Reservepage() {
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
        <div className="item1">
          <h4>Calendar</h4>
        </div>
        <div className="item1">
          <h4>Reserve</h4>
        </div>
      </div>
    </div>
  );
}
