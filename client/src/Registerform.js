import React, { useState } from 'react';

export default function SignUpForm() {
  
  // const [formData, setFormData] = useState({
  //   username: '',
  //   fullName: '',
  //   email: '',
  //   password: ''
  // });
  
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

  const handleInputChange = (e) => {
    const {id, value} = e.target;
    if(id === "fullName"){
      setFullName(value);
    }
    if(id === "userName"){
      setUserName(value);
    }
    if(id === "email"){
      setEmail(value);
    }
    if(id === "password"){
      setPassword(value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fullName, userName, email, password)
    // event.preventDefault(); // Prevent form submission
    // try {
    //   const body = { formDatausername, fullName, email, password };
    //   const response = fetch("http://localhost:5000/<routehere>" {
    //    method: "POST",
    //    headers: { "Content-Type": "application/json" },
    //    body: JSON.stringify(body)
    //   });
          // redirects to a new page
    //   window.location = "<route>";
    //   console.log(body)
    // } catch (err) {
    //   console.error(err.message);
    // }
    // Perform registration logic here
    // You can access the form data using formData object
    // console.log(formData);
  };

  return (
    <div style={{ width: '400px', height: '400px', border: '1px solid black', borderRadius: '10px', padding: '20px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Enter your full name"
          value={fullName}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="userName">Username:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="Enter your username"
          value={userName}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
