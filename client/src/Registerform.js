import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm() {
  const [state, setState] = useState({
    full_name: '',
    phoneNumber: '',
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
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Enter your phone number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

    <button type="submit">Submit</button>
  </form>
</div>

  );
}
