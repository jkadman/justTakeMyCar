import React, { useState } from 'react';
import './Registercar.css'
export default function RegisterCar() {
  const [formData, setFormData] = useState({
    CarMake: '',
    Type: '',
    Address: '',
    Year: '',
    PricePerDay: '',
    Color: ''
  });

  console.log(formData);

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
      <h2>Register your Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="CarMake">Car Make:</label>
        <select
          id="CarMake"
          name="CarMake"
          value={formData.CarMake}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Car Make</option>
          <option value="BMW'">BMW</option>
          <option value="Audi">Audi</option>
          <option value="Ducati">Ducati</option>
          <option value="Jeep"> Jeep</option>
          <option value="Bentley">Bentley</option>
          <option value="Other">Mazda</option>
          <option value="Other">Ferrari</option>
          <option value="Other">Mercedes</option>
          <option value="Other">Subaru</option>
          <option value="Other">Toyota</option>
          <option value="Other">Volksvagen</option>
          <option value="Other">Porche</option>
          <option value="Other">Subaru</option>
        </select>

        <label htmlFor="Color">Color:</label>
        <select
          id="Color"
          name="Color"
          value={formData.Color}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Color</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Yellow">Yellow</option>
          <option value="Black">Black</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="Type">Type:</label>
        <select
          id="Type"
          name="Type"
          value={formData.Type}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Type</option>
          <option value="Option A">Sedan </option>
          <option value="Option B">Truck</option>
          <option value="Option C">SUV</option>
          <option value="Option D">Van</option>
          <option value="Option E">Other</option>
        </select>

        <label htmlFor="Address">Address:</label>
        <input
          type="text"
          id="Address"
          name="Address"
          placeholder="Enter your Address"
          value={formData.Address}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="Year">Year:</label>
        <input
          type="text"
          id="Year"
          name="Year"
          placeholder="Enter the year"
          value={formData.Year}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="PricePerDay">Price per Day:</label>
        <input
          type="text"
          id="PricePerDay"
          name="PricePerDay"
          placeholder="Enter the price per day"
          value={formData.PricePerDay}
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
