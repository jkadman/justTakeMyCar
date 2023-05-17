import React, { useState } from 'react';
import './Loginpage.css';


// import react-cookies

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input 
        type="text" 
        id="username" 
        name="username" 
        placeholder="Enter your username" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input 
        type="password" 
        id="password" 
        name="password" 
        placeholder="Enter your password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p className="message">
          Forgot your password? <a href="#">Reset Password</a>
        </p>
      </form>
    </div>
  );
}
