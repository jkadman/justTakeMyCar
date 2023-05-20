DROP TABLE IF EXISTS reservations CASCADE;

CREATE TABLE reservations (
  id SERIAL PRIMARY KEY NOT NULL,
  car_id INTEGER REFERENCES cars(id),
  user_id INTEGER REFERENCES users(id),
  booking_start VARCHAR(255) NOT NULL,
  booking_end VARCHAR(255) NOT NULL,
  good_state_start BOOLEAN DEFAULT TRUE,
  good_state_end BOOLEAN DEFAULT TRUE
);