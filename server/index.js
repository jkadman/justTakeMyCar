import express from 'express';
import cors from 'cors';
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log('server is listening on port 5000');
})