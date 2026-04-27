SELECT * FROM film;

SELECT lower(title), rental_rate
FROM film;

SELECT concat("movie-", title), rental_rate
FROM film;

SELECT title, length(title), floor(rental_rate)
FROM film;

SELECT now() as date_time, year(now())
FROM film;



-- COMPARISION OPERATORS: 
-- = [EQUALS]
-- != (OR) <> [NOT EQUALS]
-- >, <, >=, <=

-- LOGICAL OPERATORS: AND, OR, NOT

-- IN OPERATOR, NOT IN OPERATOR



-- PRACTICE WORK:
-- 1. Get the titles of all films from the film table which has rating of "PG-13"

SELECT * FROM film;

SELECT title, rating
FROM film
WHERE rating = "PG-13";

-- 2. Get the title of films that are either PG13 rated or they have a release_year in 2006 
-- with a rental price of 0.99 

SELECT * FROM film;

SELECT title, rating, rental_rate
FROM film
WHERE (rating = "PG-13" || release_year = 2006) && rental_rate = 0.99;

-- 3. Get films with rating which are other than PG13.

SELECT *
FROM film
WHERE rating <> "PG-13";

-- 4. Get the films that are either PG13 or R rated or PG rated or NC17.

-- SELECT *
-- FROM film
-- WHERE rating = "PG-13" || rating = "R" || rating = "PG" || rating = "NC-17";

SELECT *
FROM film
WHERE rating IN ("PG-13", "R", "PG", "NC-17");

-- 5. Get the films released in 2006 with one of the above ratings. 

SELECT *
FROM film
WHERE release_year = 2006 && rating IN ("PG-13", "R", "PG", "NC-17");

-- 6. For every payment made on Sat or Sun, the customer gets 7.5% discount. We need to print by formatting payment
-- payment ids by concatenating by concatenating with PID, 
-- same way to customer ids with CID, 
-- payment date, 
-- day of the week as per its date in formatted way so that it is easy to read. (example usage: SELECT DATE_FORMAT(payment_date, "%a, %y-%m");)
-- amount 100 [??]
-- discounted amount after rounding it
-- final amount after rounding it, 
-- final amount with ceil & floor also.

SELECT 
	concat("PID-", payment_id), 
    concat("CID-", customer_id), 
    payment_date, 
    DATE_FORMAT(payment_date, "%a") as DOTW, 
    amount, 
	round(amount * 7.5/100, 2) as discountAmount, 
    round(amount - (amount * 7.5/100)) as finRoundAmount, 
    ceil(amount - (amount * 7.5/100)) as finCeilAmount, 
    floor(amount - (amount * 7.5/100)) as finFloorAmount
FROM payment
WHERE DATE_FORMAT(payment_date, "%a") = "Sat" || DATE_FORMAT(payment_date, "%a") = "Sun";

SELECT * FROM payment;

-- (NOTE: I am not sure if I completed the code correctly due to possible misunderstandings of the instructions.)

-- !!! dont google or use ai for these practices