import React, { useState } from 'react';
import './StolenCar.css';

export default function StolenCar() {
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    carDescription: ''
  });

  const handleButtonClick = (buttonValue) => {
    if (selectedButtons.includes(buttonValue)) {
      setSelectedButtons(selectedButtons.filter((value) => value !== buttonValue));
    } else {
      setSelectedButtons([...selectedButtons, buttonValue]);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission (for demo purposes)

    const emailSubject = 'Stolen Vehicle Report';
    const emailBody = `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nCar Description: ${formData.carDescription}\n\nSelected Options: ${selectedButtons.join(', ')}`;

    const mailtoUrl = `mailto:JustTakeMyCar@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <div className="container">
      <h2>Report Stolen Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
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

        <label htmlFor="carDescription">Car Description:</label>
        <textarea
          id="carDescription"
          name="carDescription"
          placeholder="Enter description of the stolen car"
          value={formData.carDescription}
          onChange={handleInputChange}
          required
        ></textarea>

        <div className="buttons">
          <label>
            <input
              type="checkbox"
              name="police"
              checked={selectedButtons.includes('police')}
              onChange={() => handleButtonClick('police')}
            />
            Reported to police?
          </label>
          <label>
            <input
              type="checkbox"
              name="noContact"
              checked={selectedButtons.includes('noContact')}
              onChange={() => handleButtonClick('noContact')}
            />
            No contact from rentee?
          </label>
          <label>
            <input
              type="checkbox"
              name="bookingEnded"
              checked={selectedButtons.includes('bookingEnded')}
              onChange={() => handleButtonClick('bookingEnded')}
            />
            24 hours since booking ended?
          </label>
        </div>

        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
