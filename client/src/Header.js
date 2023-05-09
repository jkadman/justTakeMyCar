import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'



export default function Header() {
  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  // };

  const linkRegister = () => {
    navigate('/register')
  }

  const linkLogin = () => {
    navigate('/login')
  }

  return (
    <header className="header">
      <span className="headerSection registerLink">
        <h1><a href="#">Register My Car</a></h1>
      </span>
      <span className="headerSection title">
        <h1>Just Take My Car</h1>
      </span>
      <span className="headerSection buttons">
        {/* {isLoggedIn ? (
          <button className="buttonContainer" >Logout</button>
        ) : ( */}
          <>
            <button className="loginButton" onClick={linkLogin}>Login</button>
            <button className="registerButton" onClick={linkRegister}>Register</button>
          </>
        {/* )} */}
      </span>
    </header>
  );
}
