SELECT booking_start
FROM reservations
JOIN cars ON cars.id = reservations.car_id;

SELECT car_photo, make, type, name, colour, price_per_day, year, street
FROM cars
JOIN reservations ON cars.id = reservations.car_id;

SELECT car_photo, make, type, name, colour, price_per_day, year, street
FROM cars
WHERE cars.id NOT IN (SELECT reservations.car_id FROM reservations);





SELECT * FROM cars
WHERE NOT EXISTS (SELECT * FROM reservations WHERE car_id = car.id);
FROM cars
WHERE cars.id NOT IN (SELECT name FROM cars)
WHERE car.id = car_id;
LEFT JOIN reservations ON cars.id = reservations.car_id
WHERE reservations.car_id IS NULL;

SELECT car.id FROM cars
MINUS SELECT car_id FROM reservations;

SELECT reservations.car_id
FROM reservations
WHERE reservations.car_id NOT IN (SELECT cars.id FROM cars);

SELECT cars.name
FROM cars
WHERE cars.id NOT IN (SELECT reservations.car_id FROM reservations);