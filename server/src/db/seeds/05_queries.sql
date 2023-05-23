SELECT booking_start
FROM reservations
JOIN cars ON cars.id = reservations.car_id;

SELECT car_photo, make, type, name, colour, price_per_day, year, street, TO_CHAR(booking_end, 'yyyy-mm-dd')
FROM cars
JOIN reservations ON cars.id = reservations.car_id;

SELECT car_photo, make, type, name, colour, price_per_day, year, street
FROM cars
WHERE cars.id NOT IN (SELECT reservations.car_id FROM reservations);


SELECT * FROM cars WHERE user_id = $1


/*for user page to see cars rented and owned*/
SELECT car_photo, make, type, name, colour, price_per_day, year, street, booking_end
FROM cars
JOIN reservations ON cars.id = reservations.car_id WHERE user_id = $1

SELECT * FROM cars c
JOIN reservations r ON r.user_id = c.user_id 
WHERE c.user_id = 1;

SELECT car_photo, make, type, name, colour, price_per_day, year, street, booking_end 
FROM cars 
JOIN reservations ON cars.id = reservations.car_id 
WHERE reservations.user_id = $1;


