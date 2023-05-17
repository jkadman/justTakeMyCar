const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./src/db/db");

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// create a new user
app.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, phone_number, password } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (name, email, phone_number, password) VALUES($1, $2, $3, $4) RETURNING * ",
      [name, email, phone_number, password]
    );
    res.status(200).json({ message: "Registration successful" }); // Send a success response
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Registration failed" }); // Send an error response
  }
});

// create a new car
app.post("/Registercar", async (req, res) => {
  try {
    console.log(req.body);
    const {
      user_id,
      car_photo,
      make,
      type,
      name,
      colour,
      price_per_day,
      year,
      street,
    } = req.body;
    const newUser = await pool.query(
      "INSERT INTO cars (user_id, car_photo, make, type, name, colour, price_per_day, year) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING * ",
      [
        user_id,
        car_photo,
        make,
        type,
        name,
        colour,
        price_per_day,
        year,
        street,
      ]
    );
    res.status(200).json({ message: "Registration successful" }); // Send a success response
  } catch (err) {
    console.log(err.message);
  }
});

// get cars

app.get("/", async (req, res) => {
  try {
    const carsLandingPage = await pool.query("SELECT * FROM cars");
    res.json(carsLandingPage.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(5001, () => {
  console.log("server is listening on port 5001");
});
