import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import './Userpage.css';


export default function Userpage() {
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/Userpage', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
        console.log('responseData', response.data)
      } catch (error) {
        console.error(error);
        setIsAuthenticated(false);
      }
    };

    fetchUserData();
  }, []);

  if (!isAuthenticated) {
    return <Navigate replace to ="/login" />;
  }

  return (
    <div id='body'>
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
    <div className='rentedName'> car name</div>
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
