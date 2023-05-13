const Pool = require('pg').Pool;
require('dotenv').config();

const config = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE
}

const pool = new Pool(config)



module.exports = pool