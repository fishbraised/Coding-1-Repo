-- 1. **Customers not matching a condition**

-- Write an SQL query to fetch the names **`first_name`**, **`last_name`** of all customers who are **not from `store_id` 312 -**  from the **`customer`** table.

SELECT first_name, last_name
FROM customer
WHERE store_id != 312;


-- 2. **Unique customers with positive revenue in a year**

-- Write a SQL query to report the **unique customers** who made a **positive payment (i.e payment is not 0)** in the year **2006**.  
-- Note: Use distinct operator to get unique values.

SELECT DISTINCT customer_id
FROM payment
WHERE amount != 0 && year(payment_date) = 2006;


-- 3. **Most Frequent Customer of Rentals**

-- **Context:**
-- In the video rental business, it’s often useful to quickly check which movies a customer has recently rented. This helps customer service representatives respond to queries, or helps staff make recommendations based on past activity.

-- **Problem Statement:**
-- Using the `rental` table in the Sakila database, **write a SQL query to find the 10 most recent rentals made by the customer with `customer_id = 5`.**
-- Your result should include the `rental_id`, `rental_date`, and `inventory_id`.
-- Sort the results by rental date, with the most recent rental first.

SELECT rental_id, rental_date, inventory_id
FROM rental
WHERE customer_id = 5
ORDER BY rental_date DESC
LIMIT 10;


-- 4. **Not Boring movies**

-- Write a query to get the `film_id`, `title`, and `description` of all films where:
-- - `film_id` is odd
-- - `description` does **not** contain the word **"BORING"**

-- Return results ordered by `length` in descending order.

SELECT film_id, title, description
FROM film
WHERE film_id % 2 = 1 && description LIKE "%BORING%" != true
ORDER BY length DESC;


-- 5. **High-Value Payment Percentage**

-- In the DVD rental business, understanding customer spending behavior is essential for planning offers, loyalty programs, and revenue forecasting. One useful metric is identifying how frequently customers make high-value payments.

-- **You are tasked with calculating the percentage of payments in the `payment` table where the amount is greater than $5.00.**

-- Write a SQL query to find the **percentage of such high-value payments**, calculated as:
-- > (number of payments with amount > 5.00) ÷ (total number of payments)
-- count > 5, count
-- Return the result rounded to **2 decimal places**, and name the column as `percentage_high`.

SELECT customer_id, round(avg(amount > 5) * 100, 2)
FROM payment
GROUP BY customer_id;
