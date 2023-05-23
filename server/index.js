const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const pool = require("./src/db/db");
const crypto = require("crypto");
const multer = require("multer");
const path = require("path");

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

const getUserByEmail = async (email) => {
  const user = `SELECT * FROM users WHERE users.email = $1`;
  const value = [`${email}`];
  return pool.query(user, value).then((result) => {
    return result.rows[0];
  });
};

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./public/pictures");
  },
  filename: (req, file, cb) => {
    const filename = file.originalname
    cb(null, filename);
  },
});

const generateSecretKey = () => {
  const secretLength = 64;
  return crypto.randomBytes(secretLength).toString("hex");
};

const secretKey = generateSecretKey();
// const secretKey = "123456"
// console.log(secretKey)

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
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const query = `SELECT * FROM users WHERE users.email = $1`;
    const value = [`${email}`];
    const dbResponse = await pool.query(query, value);
    // const rows = dbResponse.rows[0].password;
    const userPass = dbResponse.rows[0].password;
    const user = dbResponse.rows[0];
    if (userPass === password) {
      const token = jwt.sign({ user }, secretKey);
      console.log("secretKey", secretKey);
      console.log("logintoken", token);
      console.log("userId", user);

      res.json({ token });
    } else {
      res.send("Error: your password doesn't match our records");
    }
  } catch (err) {
    console.log(err.message);
  }
});

//access user page
app.get("/Userpage", authenticateToken, (req, res) => {
  const user = req.user;

  res.json({ message: "Protected route accessed successfully", user });
});

// google maps api page
app.get("/map", (req, res) => {
  res.send("hello");
});

// Middleware to Authenticate JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log("token", token);

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, secretKey, (err, decodedToken) => {
    if (err) {
      console.error(err);
      return res.sendStatus(403);
    }

    req.user = decodedToken;
    next();
  });
}

const upload = multer({ storage });

// create a new car
app.post("/Registercar", upload.single("car_photo"), async (req, res) => {
  try {
    console.log(req.body);
    const { user_id, make, type, name, colour, price_per_day, year, street } =
      JSON.parse(req.body.data);

    const car_photo = "/pictures/" + req.file.filename;
    console.log("reqUI", req.body);
    const newUser = await pool.query(
      "INSERT INTO cars (user_id, car_photo, make, type, name, colour, price_per_day, year, street) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING * ",
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

// reserve a car
app.post("/Reserve", async (req, res) => {
  try {
    console.log(req.body);
    const {
      car_id,
      user_id,
      booking_start,
      booking_end,
      good_state_start,
      good_state_end,
    } = req.body;
    console.log("reqUI", req.body);
    const newUser = await pool.query(
      "INSERT INTO reservations (car_id, user_id, booking_start, booking_end, good_state_start, good_state_end) VALUES($1, $2, $3, $4, $5, $6 ) RETURNING * ",
      [
        car_id,
        user_id,
        booking_start,
        booking_end,
        good_state_start,
        good_state_end,
      ]
    );
    res.status(200).json({ message: "Reservation request sent" }); // Send a success response
  } catch (err) {
    console.log(err.message);
  }
});

// get all cars
app.get("/", async (req, res) => {
  try {
    const carsLandingPage = await pool.query("SELECT * FROM cars");
    res.json(carsLandingPage.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//get available cars
app.get("/CarsAvailableseemore", async (req, res) => {
  try {
    const available =
      "SELECT car_photo, make, type, name, colour, price_per_day, year, street FROM cars WHERE cars.id NOT IN (SELECT reservations.car_id FROM reservations)";
    const carsAvailablePage = await pool.query(available);
    res.json(carsAvailablePage.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//get reserved cars
app.get("/Totalavailableseemore", async (req, res) => {
  try {
    const reserved =
      "SELECT car_photo, make, type, name, colour, price_per_day, year, street, TO_CHAR(booking_end, 'yyyy-mm-dd') as booking_end FROM cars JOIN reservations ON cars.id = reservations.car_id";
    const carsTotalPage = await pool.query(reserved);
    res.json(carsTotalPage.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// get user cars
app.get("/userCars", async (req, res) => {
  const userId = req.headers["x-user-id"];
  const query = "SELECT * FROM cars WHERE user_id = $1";
  const values = [userId];

  pool
    .query(query, values)
    .then((result) => {
      const cars = result.rows;
      res.json(cars);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(5001, () => {
  console.log("server is listening on port 5001");
});
