/*Not used in database. Left here in case of change*/
DROP TABLE IF EXISTS reviews CASCADE;

CREATE TABLE reviews (
  user_id INTEGER REFERENCES owners(id),
  car_id INTEGER REFERENCES cars(id)
  booking_id INTEGER REFERENCES bookings(id),
  review VARCHAR(255) NOT NULL
);