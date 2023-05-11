const express = require('express');
const cors = require('cors');
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.post("/", async(req, res) => {
  try {
  console.log(req.body);
  // const { image, type, make, name, year } = req.body
  // const newCar = await pool.query(
    //"INSERT INTO <tablename> (image, type, make, name, year) VALUES($1, $2, $3, $4, $5) RETURNING * ",
    //[image, type, make, name, year]
  //)
  } catch (err) {
  console.log(err.message);
  }
})

// get cars

app.get("/")


app.listen(5000, () => {
  console.log('server is listening on port 5000');
})