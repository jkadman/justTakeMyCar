import React from 'react';
import './Loginpage.css';


// import react-cookies

export default function Login() {
  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" />

        <button type="submit">Login</button>

        <p className="message">
          Forgot your password? <a href="#">Reset Password</a>
        </p>
      </form>
    </div>
  );
}
