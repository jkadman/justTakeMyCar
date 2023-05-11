const express = require('express');
const cors = require('cors');
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.post("/test", async(req, res) => {
  try {
  console.log(req.body);
  } catch (err) {
  console.log(err.message);
  }
})


app.listen(5000, () => {
  console.log('server is listening on port 5000');
})