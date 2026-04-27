-- Q1. List all posts with their users
-- Answer:

SELECT post_id, content, username
FROM posts
JOIN users
USING (user_id);


-- Q2. Fetch the 2 recent posts posted by a user
-- Answer:

SELECT post_id, content, post_date
FROM posts
ORDER BY post_date DESC
LIMIT 2;


-- Q3. Fetch the total number of posts posted by a user till date
-- Answer:

SELECT username, count(post_id) as posts_count
FROM posts
JOIN users
USING (user_id)
WHERE user_id = 2;


-- Q4. List all users with the groups they belong to
-- Answer:

SELECT *
FROM users
LEFT JOIN user_groups
USING (user_id)
LEFT JOIN `groups`
USING (group_id);


-- Q5. List all groups with their users
-- Answer:

SELECT group_id, group_name, username
FROM `groups`
LEFT JOIN user_groups
USING (group_id)
JOIN users
USING (user_id);


-- Q6. For every user, fetch the total number of posts posted so far
-- Answer:

SELECT username, count(post_id) as posts_count
FROM users
LEFT JOIN posts
USING (user_id)
GROUP BY user_id;


-- Q7. List all users and posts
-- Answer:

SELECT u.user_id, username, post_id, content
FROM users u
LEFT JOIN posts p
ON u.user_id = p.user_id
UNION
SELECT p.user_id, username, post_id, content
FROM users u
RIGHT JOIN posts p
ON u.user_id = p.user_id;


-- Q8. Show all possible combinations of users and groups
-- Answer:

SELECT username, group_name
FROM users
JOIN `groups`;


-- Q9. List posts and comments by the same user
-- Answer:

-- Use a natural join to list only posts and users the username of the user who posted.
--  Show `post_id`, `post_content`, `username`.

SELECT post_id, p.content as post_content, username
FROM posts p
NATURAL JOIN users u;

SELECT * FROM posts;
SELECT * FROM comments;


-- Q10. List posts and comments by the same user

SELECT p.post_id, p.content as post_content, comment_id, c.content as comment_content
FROM posts p
JOIN comments c
USING (user_id);

SELECT * FROM posts;
SELECT * FROM comments;


-- Q11. List posts and comments where user and post match (Compound)
-- Answer:

SELECT p.post_id, p.content as post_content, comment_id, c.content as comment_content, username
FROM posts p
JOIN comments c
ON p.user_id = c.user_id AND p.post_id = c.post_id
JOIN users u
ON p.user_id = u.user_id;


-- Q12. List posts and comments using implicit join style
-- Answer:

SELECT p.post_id, p.content as post_content, c.comment_id, c.content as comment_content
FROM posts p, comments c
WHERE p.user_id = c.user_id && p.post_id = c.post_id;


-- Q13. List posts and comments using WHERE instead of ON
-- Answer:

SELECT p.post_id, p.content as post_comment, c.comment_id, c.content as comment_content
FROM posts p
JOIN comments c
WHERE p.post_id = c.post_id;


-- Q14. Find actors who acted in movies never rented by a particular store
-- Answer: 

SELECT actor_id, first_name, last_name, film_id, title as film_title
FROM actor a
JOIN film_actor fa
USING (actor_id)
JOIN film f
USING (film_id)
LEFT JOIN inventory i
USING (film_id)
LEFT JOIN rental r
USING (inventory_id)
WHERE r.rental_id IS NULL && i.store_id != 1
ORDER BY actor_id, film_title DESC;


SELECT * FROM actor;
SELECT * FROM film_actor;
SELECT * FROM film;
SELECT * FROM inventory;
SELECT * FROM store;
SELECT * FROM rental;

SELECT * FROM comments;
SELECT * FROM `groups`;
SELECT * FROM posts;
SELECT * FROM user_groups;
SELECT * FROM users;
SELECT * FROM users_copy;









-- TRUNCATE TABLE comments;
-- TRUNCATE TABLE `groups`;
-- TRUNCATE TABLE posts;
-- TRUNCATE TABLE user_groups;
-- TRUNCATE TABLE users;
-- TRUNCATE TABLE users_copy;

-- -- Insert users
-- INSERT INTO users (username, gender, email, age)
-- VALUES 
-- ('Alice', 'Female', 'alice@email.com', 17),
-- ('Bob', 'Male', 'bob@email.com', 25),
-- ('Charlie', 'Male', 'charlie@email.com', 18);

-- -- Insert posts
-- INSERT INTO posts (content, post_date, user_id)
-- VALUES
-- ('Exploring the new city!', '2025-01-10', 1),
-- ('Had a great coffee today ☕', '2025-01-12', 1),
-- ('Learning SQL is fun!', '2025-01-15', 2);

-- -- Insert comments
-- INSERT INTO comments (content, comment_date, user_id, post_id)
-- VALUES
-- ('Welcome Alice!', '2025-01-11', 2, 1),
-- ('Sounds interesting!', '2025-01-13', 3, 2),
-- ('Thanks Bob!', '2025-01-16', 1, 3);

-- INSERT INTO comments (content, comment_date, user_id, post_id)
-- VALUES
-- ("I like this post a lot!!", "2025-01-18", 1, 1);

-- -- Insert groups
-- INSERT INTO `groups` (group_name, created_date)
-- VALUES
-- ('Travel Enthusiasts', '2025-01-05'),
-- ('Coffee Lovers', '2025-01-06');

-- -- Insert user_groups
-- INSERT INTO user_groups (user_id, group_id)
-- VALUES
-- (1, 1),
-- (2, 1),
-- (1, 2),
-- (3, 2);

-- SET FOREIGN_KEY_CHECKS = 0;

-- SHOW CREATE TABLE comments;
-- SHOW CREATE TABLE `groups`;
-- SHOW CREATE TABLE posts;
-- SHOW CREATE TABLE users;
-- SHOW CREATE TABLE users_copy;



