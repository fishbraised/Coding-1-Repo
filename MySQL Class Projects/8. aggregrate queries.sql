SELECT * FROM film;

SELECT count(title) FROM film;

SELECT sum(rental_rate)/count(rental_rate) FROM film;
SELECT avg(rental_rate) FROM film;

SELECT max(rental_rate) FROM film;
SELECT min(rental_rate) FROM film;

SELECT title, max(rental_rate) FROM film;
-- SELECT title, max(rental_rate) FROM film;


-- SELECT max(grade) FROM students
-- WHERE batch = "A";

SELECT count(title), rating, max(rental_duration)
FROM film
GROUP BY rating;




-- PG13----> 15
-- PG -----> 10 
-- ABC ----> 8


-- YOU WANT TO MAKE A REPORT BY IDENTIFYING HIGH VALUE CUSTOMERS BADSED ON THEIR PAYMENT HISTORY

-- A HIGH VALUE CUSTOMER IS DEFINED AS A CUSTOMER WHO MADE MORE THAN 35 PAYMENTS AND SPENT A TOTAL OF MORE THAN 150$

-- PRINT CUSTOMER ID, NO OF PAYMENTS, TOTAL SPENT, AVERAGE PAYMENT ROUNDED, LARGEST SINGLE PAYMENT

SELECT customer_id, count(payment_id), sum(amount) as sumAmount, round(avg(amount), 2), max(amount)
FROM payment
GROUP BY customer_id
HAVING count(payment_id) > 35 AND sumAmount > 150;

-- group by
-- aggregration variable in select
-- having
-- select print

-- SELECT *
-- FROM payment

-- SEQUENCE OF SQL OPERATIONS WHEN WE PERFORM GROUPING 
-- FROM 
-- WHERE 
-- GROUP BY 
-- AGGREGATIONS
-- HAVING
-- SELECT







