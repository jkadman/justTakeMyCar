SELECT booking_start
FROM reservations
JOIN cars ON cars.id = reservations.car_id;

SELECT car_photo, make, type, name, colour, price_per_day, year, street, booking_end
FROM cars
JOIN reservations ON cars.id = reservations.car_id;

SELECT car_photo, make, type, name, colour, price_per_day, year, street
FROM cars
WHERE cars.id NOT IN (SELECT reservations.car_id FROM reservations);


SELECT * FROM cars WHERE user_id = $1

SELECT car_photo, make, type, name, colour, price_per_day, year, street, booking_end
FROM cars WHERE user_id = $1
LEFT JOIN reservations ON cars.id = reservations.car_id;




