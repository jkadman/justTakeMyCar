DROP TABLE IF EXISTS cars CASCADE;

CREATE TABLE cars (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  car_photo VARCHAR(255) NOT NULL,
  make VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  colour VARCHAR(255) NOT NULL,
  price_per_day DECIMAL NOT NULL,
  year INTEGER NOT NULL,
  house_number VARCHAR(255),
  street_direction VARCHAR(255),
  street_name VARCHAR(255),
  street_suffix VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  zip VARCHAR(255),
  country VARCHAR(255),
  email VARCHAR(255)
);
