import React, { useState } from 'react';
import axios from 'axios';
import './Loginpage.css';


// import react-cookies

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try { 
    const response = await axios.post('/login', { email, password });
    const token = response.data.token;

    localStorage.setItem('token', token)

    window.location.href = '/';
  
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input 
        type="text" 
        id="username" 
        name="username" 
        placeholder="Enter your email" 
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
