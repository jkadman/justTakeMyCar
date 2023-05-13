const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./src/db/db')

// middleware
app.use(cors());
app.use(express.json());

// create a new user
app.post('/register', async(req, res) => {
  try {
    console.log(req.body)
    const { name, email, phone_number, password } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (name, email, phone_number, password) VALUES($1, $2, $3, $4) RETURNING * ",
      [name, email, phone_number, password]
    );
    res.status(200).json({ message: 'Registration successful' }); // Send a success response
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: 'Registration failed' }); // Send an error response
  }
})


// create a new car
app.post("/Registercar", async(req, res) => {
  try {
  console.log(req.body);
  // const { image, type, make, name, year } = req.body
  // const newCar = await pool.query(
  //   "INSERT INTO <tablename> (image, type, make, name, year) VALUES($1, $2, $3, $4, $5) RETURNING * ",
  //   [image, type, make, name, year]
  // )
  } catch (err) { 
  console.log(err.message);
  }
})

// get cars

app.get("/")


app.listen(5001, () => {
  console.log('server is listening on port 5001');
})