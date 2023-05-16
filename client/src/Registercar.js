import React, { useState } from "react";
import "./Registercar.css";
import { useNavigate } from "react-router-dom";

export default function RegisterCar() {
  const [formData, setFormData] = useState({
    user_id: "13",
    car_photo: "",
    make: "",
    type: "",
    name: "",
    colour: "",
    price_per_day: "",
    year: "",
  });

  console.log(formData);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission (for demo purposes)
    try {
      const {
        user_id,
        car_photo,
        make,
        type,
        name,
        colour,
        price_per_day,
        year,
      } = formData;
      const body = {
        user_id,
        car_photo,
        make,
        type,
        name,
        colour,
        price_per_day,
        year,
      };
      const response = await fetch("http://localhost:5001/Registercar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      navigate("/");
    } catch (err) {
      console.error(err.message);
    }

    // Attach the file if available
    if (formData.image) {
      const fileUrl = URL.createObjectURL(formData.image);
      const anchor = document.createElement("a");
      anchor.href = "your-api-endpoint-url";
      anchor.target = "_blank";
      anchor.click();
    }
  };

  return (
    <div className="container">
      <h2>Register your Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user_id">User ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          placeholder="Enter your id"
          value={formData.user_id}
          onChange={handleInputChange}
        />

        <label htmlFor="car_photo">Car photo:</label>
        <input
          type="text"
          id="car_photo"
          name="car_photo"
          placeholder="Enter your car_photo"
          value={formData.car_photo}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="make">Car Make:</label>
        <select
          id="make"
          name="make"
          value={formData.make}
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
        </select>

        <label htmlFor="type">Type:</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Type</option>
          <option value="sedan">sedan </option>
          <option value="truck">truck</option>
          <option value="SUV">SUV</option>
          <option value="van">van</option>
          <option value="jeep">jeep</option>
          <option value="convertable">convertable</option>
          <option value="motorcycle">motorcycle</option>
          <option value="sports">sports</option>
          <option value="hatchback">hatchback</option>
        </select>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter the name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="colour">Colour:</label>
        <select
          id="colourr"
          name="colour"
          value={formData.colour}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Color</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Yellow">Yellow</option>
          <option value="Black">Black</option>
          <option value="Grey">Grey</option>
          <option value="White">White</option>
        </select>

        <label htmlFor="price_per_day">Price per Day:</label>
        <input
          type="text"
          id="price_per_day"
          name="price_per_day"
          placeholder="Enter the price per day"
          value={formData.price_per_day}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          name="year"
          placeholder="Enter the year"
          value={formData.year}
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
