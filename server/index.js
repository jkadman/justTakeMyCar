const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./src/db/db");

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const getUserByEmail = async (email) => {
  const user = `SELECT * FROM users WHERE users.email = $1`;
  const value = [`${email}`];
  return pool
  .query(user, value)
  .then((result) => {
    return result.rows[0]
  })
}

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

//user login
app.get("/login", async (req, res) => {
  
  try {
    const { email, password } = req.body;
    const query = `SELECT * FROM users WHERE users.email = $1`;
    const value = [`${email}`];
    const dbResponse = await pool.query(query, value);
    // const rows = dbResponse.rows[0].password;
    const userPass = dbResponse.rows[0].password;
    const userId = dbResponse.rows[0].id 
    if (userPass === password) {
      res.json({userId})
    } else {
      res.send("Error: your password doesn't match our records")
    }


  } catch (err) {
    console.log(err.message);
  }
})

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
