import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm() {
  
  const [state, setState] = useState({
    full_name: '',
    username: '',
    email: '',
    password: ''
  });
  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.id]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { full_name, email, username, password } = state;
      const body = { full_name, email, username, password };
      const response = await fetch("http://localhost:5001/register", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(body)
      });
      navigate("/login")
      
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div style={{ width: '400px', height: '400px', border: '1px solid black', borderRadius: '10px', padding: '20px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="full_name">Full Name:</label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          placeholder="Enter your full name"
          value={state.full_name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="userName">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={state.username}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={state.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={state.password}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
