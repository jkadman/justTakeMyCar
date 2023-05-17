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
  year integer NOT NULL,
  street VARCHAR(255)
);
