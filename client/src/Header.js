import React, { useState } from 'react';



export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="header">
      <span className="headerSection registerLink">
        <h1><a href="#">Register My Car</a></h1>
      </span>
      <span className="headerSection title">
        <h1>Just Take My Car</h1>
      </span>
      <span className="headerSection buttons">
        {isLoggedIn ? (
          <button className="buttonContainer" onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <button className="loginButton" onClick={handleLogin}>Login</button>
            <button className="registerButton">Register</button>
          </>
        )}
      </span>
    </header>
  );
}
