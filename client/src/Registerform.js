import React, { useState } from 'react';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    phoneNumber: '', // Add phoneNumber field
    fullName: '',
    email: '',
    password: ''
  });
  console.log(formData)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    // Perform registration logic here
    // You can access the form data using formData object
    console.log(formData);
  };

  return (
    <div className="container" style={{ width: '400px', height: '400px', border: '1px solid black', borderRadius: '10px', padding: '20px', margin: '0 auto' }}>
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

    <label htmlFor="phoneNumber">Phone Number:</label>
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
