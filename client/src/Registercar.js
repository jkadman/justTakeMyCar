import React, { useState } from "react";
import "./Registercar.css";
import { useNavigate } from "react-router-dom";
import FetchData from "./hooks/fetchdata";

export default function RegisterCar() {
  const [userData, setUserData] = useState(null);

  const handleUserData = (data) => {
    setUserData(data);
  };

  const navigate = useNavigate();

  // populating the userId with the userId from the database once the async request is loaded
  const userId = userData?.user?.id;

  const [formData, setFormData] = useState({
    user_id: "",
    car_photo: "",
    make: "",
    type: "",
    name: "",
    colour: "",
    price_per_day: "",
    year: "",
    street: "",
    email: ""
  });


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result;
        setFormData((prevState) => ({ ...prevState, car_photo: dataUrl }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission (for demo purposes)
    try {
      const {
        make,
        type,
        name,
        colour,
        price_per_day,
        year,
        street,
        car_photo,
        email,
      } = formData;

      const body = {
        user_id: userId,
        make,
        type,
        name,
        colour,
        price_per_day,
        year,
        street,
        car_photo,
        email
      };


      const response = await fetch("http://localhost:5001/Registercar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      navigate("/Userpage");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="container">
      <FetchData onDataReceived={handleUserData} />
      <h2>Register your Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user_id">User ID:</label>
        <input
          type="text"
          id="id"
          name="user_id"
          placeholder="Enter your id"
          value={userId ?? ""}
          onChange={handleInputChange}
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
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
          <option value="Ducati">Ducati</option>
          <option value="Jeep">Jeep</option>
          <option value="Bentley">Bentley</option>
          <option value="Mazda">Mazda</option>
          <option value="Ferrari">Ferrari</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Subaru">Subaru</option>
          <option value="Toyota">Toyota</option>
          <option value="Volksvagen">Volksvagen</option>
          <option value="Porche">Porche</option>
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
          <option value="sedan">sedan</option>
          <option value="truck">truck</option>
          <option value="SUV">SUV</option>
          <option value="van">van</option>
          <option value="jeep">jeep</option>
          <option value="convertible">convertible</option>
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

        <label htmlFor="colour">Colour:</label>
        <select
          id="colour"
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

        <label htmlFor="street">What street is your car parked?</label>
        <input
          type="text"
          id="street"
          name="street"
          placeholder="Enter the street"
          value={formData.street}
          onChange={handleInputChange}
          required
        />

<div className="image-upload">
  <label htmlFor="image">Upload Image:</label>
  <input
    type="file"
    id="car_photo"
    name="car_photo"
    accept="image/*"
    onChange={handleFileChange}
    required
  />
</div>



        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
