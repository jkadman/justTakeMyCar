import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm() {
  const [state, setState] = useState({
    name: '',
    phone_number: '',
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
      const { name, email, phone_number, password } = state;
      const body = { name, email, phone_number, password };
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
    <div
  id="form"
  style={{
    width: '400px',
    height: '400px',
    border: '1px solid black',
    borderRadius: '10px',
    padding: '20px',
    margin: '0 auto',
    backgroundColor: '#f1f1f1',
  }}
>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          value={state.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="phone_number">Phone Number:</label>
        <input
          type="text"
          id="phone_number"
          name="phone_number"
          placeholder="Enter your phone number"
          value={state.phone_number}
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
