import React, { useState } from "react";
import "./Registercar.css";
import { useNavigate } from "react-router-dom";
import FetchData from "./hooks/fetchdata";

export default function RegisterCar() {
  const [userData, setUserData] = useState(null);
  const [image, setImage] = useState({ preview: "", data: "" });
  const [status, setStatus] = useState('');




  const handleUserData = (data) => {
    setUserData(data);
  };

  const navigate = useNavigate();

  // populating the userId with the userId from the database once the async request is loaded
  const userId = userData?.user?.id;

  const [carData, setCarData] = useState({
    user_id: "",
    car_photo: "",
    make: "",
    type: "",
    name: "",
    colour: "",
    price_per_day: "",
    year: "",
    street: "",
    street_name:"",
    street_suffix:"",
    city:"",
    state:"",
    zip:"",
    country:"",
    email: ""
  });





  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       const dataUrl = reader.result;
  //       setFormData((prevState) => ({ ...prevState, car_photo: dataUrl }));
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCarData((prevState) => ({
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
        house_number,
        street_direction,
        street_name,
        street_suffix,
        city,
        state,
        zip,
        country,
        car_photo,
        email,
      } = carData;

      const body = {
        user_id: userId,
        car_photo,
        make,
        type,
        name,
        colour,
        price_per_day,
        year,
        house_number,
        street_direction,
        street_name,
        street_suffix,
        city,
        state,
        zip,
        country,
        email
      };

      const formData = new FormData()
      formData.append("car_photo", image.data);
      formData.append("data", JSON.stringify(body));
      // imgData.append('file', image.data);
      const response = await fetch("http://localhost:5001/Registercar", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        navigate("/Userpage");
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  // const handleFileSubmit = async (e) => {
  //   e.preventDefault();
  //   let imgData = new FormData()
  //   imgData.append('file', image.data);
  //   const response = await fetch('http://localhost:5001/image', {
  //     method: 'POST',
  //     body: imgData
  //   })
  //   if (response) setStatus(response.statusText);
  // }

  return (
    <div className="container">
      <FetchData onDataReceived={handleUserData} />
      <h2>Register your Vehicle</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
          value={carData.make}
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
          value={carData.type}
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
          value={carData.name}
          onChange={handleInputChange}
          required
        />

<label htmlFor="email">Email:</label>
<input
  type="email"
  id="email"
  name="email"
  placeholder="Enter your email"
  value={carData.email}
  onChange={handleInputChange}
  required
/>

        <label htmlFor="colour">Colour:</label>
        <select
          id="colour"
          name="colour"
          value={carData.colour}
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
          value={carData.price_per_day}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          name="year"
          placeholder="Enter the year"
          value={carData.year}
          onChange={handleInputChange}
          required
        />

<label htmlFor="year">Year:</label>
<input
  type="text"
  id="year"
  name="year"
  placeholder="Enter the year"
  value={carData.year}
  onChange={handleInputChange}
  required
/>

<label htmlFor="street">What street is your car parked?</label>
<input
  type="text"
  id="street_name"
  name="street"
  placeholder="Enter the street"
  value={carData.street}
  onChange={handleInputChange}
  required
/>

<label htmlFor="house_number">What is the house number?</label>
<input
  type="text"
  id="house_number"
  name="house_number"
  placeholder="Enter the house number"
  value={carData.house_number}
  onChange={handleInputChange}
  required
/>

<label htmlFor="street_direction">What street direction?</label>
<input
  type="text"
  id="street_direction"
  name="street_direction"
  placeholder="Enter the direction"
  value={carData.street_direction}
  onChange={handleInputChange}
  required
/>

<label htmlFor="street_name">What street name?</label>
<input
  type="text"
  id="street_name"
  name="street_name"
  placeholder="Enter the street name"
  value={carData.street_name}
  onChange={handleInputChange}
  required
/>

<label htmlFor="street_suffix">What street suffix?</label>
<input
  type="text"
  id="street_suffix"
  name="street_suffix"
  placeholder="Enter the street suffix"
  value={carData.street_suffix}
  onChange={handleInputChange}
  required
/>

<label htmlFor="city">Which city?</label>
<input
  type="text"
  id="city"
  name="city"
  placeholder="Enter the city"
  value={carData.city}
  onChange={handleInputChange}
  required
/>

<label htmlFor="state">What state?</label>
<input
  type="text"
  id="state"
  name="state"
  placeholder="Enter the state"
  value={carData.state}
  onChange={handleInputChange}
  required
/>

<label htmlFor="zip">Zip code</label>
<input
  type="text"
  id="zip"
  name="zip"
  placeholder="Enter zip"
  value={carData.zip}
  onChange={handleInputChange}
  required
/>

<label htmlFor="country">Which country?</label>
<input
  type="text"
  id="country"
  name="country"
  placeholder="Enter the country"
  value={carData.country}
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
