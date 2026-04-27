SELECT *
FROM film;

SELECT *
FROM language;

SELECT title, name
FROM film AS f
JOIN language AS l
ON f.language_id = l.language_id;


SELECT a.address, c.city, co.country, a.postal_code, a.district
FROM address a
JOIN city c
ON a.city_id = c.city_id
JOIN country co
ON c.country_id = co.country_id;



-- Q) Show all the films along with their rental information if they were ever rented.

-- If a film was never rented, it should still appear in the result with NULL  details

-- Show the output of: film_id, title, rental_id, rental_rate

-- film_id is in film, title is in film, rental_id is in rental, rental_rate is in rental

SELECT f.film_id, title, rental_id
FROM film f
LEFT JOIN inventory i
ON f.film_id = i.film_id
LEFT JOIN rental r
ON i.inventory_id = r.inventory_id
UNION
SELECT f.film_id, title, rental_id
FROM film f
RIGHT JOIN inventory i
ON f.film_id = i.film_id
RIGHT JOIN rental r
ON i.inventory_id = r.inventory_id;

SELECT *
FROM film
NATURAL JOIN film_actor;

SELECT * FROM film;
SELECT * FROM film_actor;



