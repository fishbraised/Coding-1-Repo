-- LIKE OPERATOR:
-- This is used to perform quer-- ies on strings. 
-- This operator is especially used in WHERE clause to retrieve all the rows that match the given pattern. 
-- We can achedie this by using wildcard characters in SQL. 

-- 1. % ---> Represents zero or more characters
-- 2. _ ---> Represents a single character

-- Examples: 
-- 1. Exact match ---- WHERE name LIKE "CAT"
-- 2. Starts with --- WHERE name LIKE "cat%"
-- 3. Ends with --- WHERE name LIKE "%cat"
-- 4. Contains ---- WHERE name LIKE "%cat%"
-- 5. Pattern matching ---- WHERE name LIKE "A_%"

SELECT * from film 
ORDER BY rental_rate DESC, rental_duration DESC;

SELECT * from film
WHERE rental_rate > 2
ORDER BY rental_rate DESC, rental_duration ASC;

