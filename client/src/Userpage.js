import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import './Userpage.css';
import FetchData from './hooks/fetchdata';

export default function Userpage() {
  const [userData, setUserData] = useState(null);

  const handleUserData = (data) => {
    setUserData(data);
  }

  // FetchData();
  console.log('userpagedata', userData.user.email)

  // const {email} = userData

  return (
    <div id='body'>
      <FetchData onDataReceived={handleUserData} />
      {userData ? (
        <div id='user'>
        <h2>User Name</h2>
        <p>Email: user@example.com</p>
      </div>
      ) : (
        <p>Loading...</p>
      )}
      

  <h2>Rented Cars</h2>
<div id='rentedCon'>
  <div class='rentedcars'>
    <div className='rentedName'> {userData.user.email} </div>
    <div className='rentedImg'> img goes here</div>
    <div className='rentedfooter'> Reserve </div>
  </div>

  <div class='rentedcars'>
    <div className='rentedName'> car name</div>
    <div className='rentedImg'> img goes here</div>
    <div className='rentedfooter'> Reserve </div>
  </div>

  <div class='rentedcars'>
    <div className='rentedName'> car name</div>
    <div className='rentedImg'> img goes here</div>
    <div className='rentedfooter'> Reserve </div>
  </div>
</div>



        <h2>My cars</h2>
        <div id='CarCon'>
  <div class='ownedcars'>
    <div className='rentedName'> car name</div>
    <div className='rentedImg'> img goes here</div>
    <div className='rentedfooter'> Reserve </div>
  </div>

  <div class='ownedcars'>
    <div className='rentedName'> car name</div>
    <div className='rentedImg'> img goes here</div>
    <div className='rentedfooter'> Reserve </div>
  </div>

  <div class='ownedcars'>
    <div className='rentedName'> car name</div>
    <div className='rentedImg'> img goes here</div>
    <div className='rentedfooter'> Reserve </div>
  </div>
</div>
    </div>
  );
}
