import React from 'react';
import './Userpage.css';


export default function Userpage() {

  return (
    <div id='body'>
      <div id='user'>
        <h2>User Name</h2>
        <p>Email: user@example.com</p>
      </div>

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
