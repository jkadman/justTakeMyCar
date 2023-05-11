import React from 'react';
import { useState } from 'react';

export default function RegisterCar() {
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNum: '',
    Address:''
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

    // Attach the file if available
    if (formData.image) {
      const fileUrl = URL.createObjectURL(formData.image);
      const anchor = document.createElement('a');
      anchor.href = 'your-api-endpoint-url';
      anchor.target = '_blank';
      anchor.click();
    }
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

        {/* ...rest of the form code... */}

       
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


<label htmlFor="phone#">Phone number</label>
<input
  type="text"
  id="phone#"
  name="phone#"
  placeholder="Enter your Phone number"
  value={formData.phoneNum} 
  onChange={handleInputChange}
  required
/>

<label htmlFor="Address"> Address</label>
<input
  type="text"
  id="Address"
  name="Address"
  placeholder="Enter your Address"
  value={formData.Address} 
  onChange={handleInputChange}
  required
/>




<div className="image-upload">
          <label htmlFor="image">Upload Image:</label>
          <input type="file" id="image" name="image" />
        </div>

        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
