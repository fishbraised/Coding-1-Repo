-- ### **1. Create Table - User**

-- Write a query to create ***user*** table in the database with the following columns.

-- - `user_id` (an integer to uniquely identify a user - Primary key, auto_increment)
-- - `username` (a string of max length 250 characters, not null, unique)
-- - `gender` (a string of max length 50 characters, not null, unique)
-- - `email` (a string of max length 500 characters, not null, unique)
-- - `join_date` (date, default to current date)
-- - `age` (integer, must be greater than or equal to 13)

CREATE TABLE users (
	user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(250) NOT NULL UNIQUE,
    gender VARCHAR(50) NOT NULL,
    email VARCHAR(500) NOT NULL UNIQUE,
    join_date DATE DEFAULT (CURDATE()),
    age INT CHECK(age >= 13)
);


-- ### **2. Create Table – Posts**

-- Create a table `posts` with:

-- - `post_id` (an integer to uniquely identify a post - Primary key, auto_increment)
-- - `content` (text, not null)
-- - `post_date` (date, default current date)


-- **Note:** Create a table in such a way that if we delete a user from the `user` table, then the related posts in this `posts` table must be automatically deleted.

-- **Hint:**  Think about how the posts table will know which user created the post, and how to set it up so posts get removed automatically if that user is deleted.

CREATE TABLE posts (
	post_id INT PRIMARY KEY AUTO_INCREMENT,
    content TEXT NOT NULL,
    post_date DATE DEFAULT (CURDATE()),
    
    user_id INT,
    
	FOREIGN KEY (user_id) REFERENCES users(user_id)
    ON DELETE CASCADE
);



-- ### **3. Create Table - Comments**

-- Create a table `comments` with:

-- - `comment_id` (an integer to uniquely identify a comment - Primary key, auto_increment)
-- - `content` (a text field)
-- - `comment_date` (date, default current date)

-- **Note:** Create a table in such a way that:

-- - If we delete a user from the **`*user*`** table, then the related comments in the **`*comment*`** table must be automatically deleted.
-- - Similarly, if we delete a **`*post*`**, then the comments related to the post must be automatically deleted.

CREATE TABLE comments (
	comment_id INT PRIMARY KEY AUTO_INCREMENT,
    content TEXT,
    comment_date DATE DEFAULT (CURDATE()),
    
    user_id INT DEFAULT 1,
    
    FOREIGN KEY (user_id) REFERENCES users(user_id)
    ON DELETE CASCADE,
    
	post_id INT DEFAULT 1,

    FOREIGN KEY (post_id) REFERENCES posts(post_id)
    ON DELETE CASCADE
);



-- ### **4. Create Table - Groups**

-- Create a table `groups` with:

-- - `group_id` (an integer to uniquely identify a group - Primary key, auto_increment)
-- - `group_name` (a string of max length 100 characters, unique & not null)
-- - `created_date` (date, default current date)

CREATE TABLE `groups` (
	group_id INT PRIMARY KEY AUTO_INCREMENT,
    group_name VARCHAR(100) NOT NULL UNIQUE,
    created_date DATE DEFAULT (CURDATE())
);


-- ### **Create Table - User_groups**

-- This table connects users to the groups they have joined. It should have:

-- - `user_id` (integer, foreign key referencing `user_id` of `user` table)
-- - `group_id` (integer, foreign key referencing `group_id` of `groups` table)
-- - The combination of `user_id` and `group_id` must be unique.

CREATE TABLE user_groups (
	user_id INT DEFAULT 1 UNIQUE,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    
	group_id INT DEFAULT 1 UNIQUE,
	FOREIGN KEY (group_id) REFERENCES `groups`(group_id)
);

-- Question 1: I don't know if this is what making it unique meant.



-- ### **6. Insert Multiple Users**

-- Insert three users into the `users` table:

-- 1. Alice, alice@email.com, age 17
-- 2. Bob, bob@email.com, age 25
-- 3. Charlie, charlie@email.com, age 18

INSERT INTO users (username, gender, email, age)
VALUES
("Alice", "female", "alice@gmail.com", 17),
("Bob", "male", "bob@gmail.com", 25),
("Charlie", "male", "charlie@gmail.com", 18);



-- ### **7. Alter Table – Add Column to Users**

-- Add a column `bio` (varchar(255)) to the `users` table.

ALTER TABLE users
ADD COLUMN bio VARCHAR(255);



-- ### **8. Update with Condition**

-- Update the `bio` of all users whose email domain is `@email.com` to `"Verified Member"`.

UPDATE users
SET bio = "Verified Member"
WHERE email LIKE "%@gmail.com";



-- ### **9. Insert Posts**

-- Insert two posts for Alice and one post for Bob.

-- - **Alice's posts**:
--     1. `"Exploring the new city!"` on `2025-01-10`
--     2. `"Had a great coffee today ☕"` on `2025-01-12`

-- - **Bob's post**:
--     1. `"Learning SQL is fun!"` on `2025-01-15`

INSERT INTO posts (content, post_date, user_id)
VALUES
("Learning SQL is fun!", "2025-01-15", 1),
("Exploring the new city!", "2025-01-10", 1),
("Had a great coffee today ☕", "2025-01-12", 2);

-- Question 2: How do I make it so post_id here begins from 1? I only remember DELETE FROM posts.



-- ### **10. Insert Comments**

-- Insert three comments:

-- - Bob comments "Welcome Alice!" on Alice’s first post.
-- - Charlie comments "Sounds interesting!" on Alice’s second post.
-- - Alice comments "Thanks Bob!" on Bob’s post.

INSERT INTO comments (content, user_id, post_id)
VALUES
("Welcome Alice!", 2, 1),
("Sounds interesting!", 3, 2),
("Welcome Alice!", 1, 3);

-- !! Question 3: I'm not sure if this actually works or not. There is the comment_id for a specific comment, but I can't identify who is the one commenting. There is user_id and post_id, but it could be Alice or Bob's. I know the question states what to do, but I think comments table is missing one or two more properties to work.



-- ### **11. Delete with Condition**

-- Delete all posts created by users whose age is less than 18.

DELETE FROM posts
WHERE age < 18;

-- !! Question 4: Even if the table was made correctly, I don't think the query above would work.



-- ### **12. Insert All Users into a Copy Table**

-- Create a table `users_copy` identical to `users` ( You can check out the Q1 above), but this copy table should additionally also have a `status` column (default `'active'`).

-- Insert all users from `users` into `users_copy` without specifying `status` while inserting.

CREATE TABLE users_copy (
	user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(250) NOT NULL UNIQUE,
    gender VARCHAR(50) NOT NULL,
    email VARCHAR(500) NOT NULL UNIQUE,
    join_date DATE DEFAULT (CURDATE()),
    age INT CHECK(age >= 13),
	`status` VARCHAR(50) DEFAULT "active"
);

INSERT INTO users_copy
SELECT * FROM users;



DROP TABLE users;
DROP TABLE posts;
DROP TABLE comments;
DROP TABLE `groups`;
DROP TABLE user_groups;
DROP TABLE users_copy;



SELECT * FROM users;
SELECT * FROM posts;
SELECT * FROM comments;
SELECT * FROM `groups`;
SELECT * FROM user_groups;
SELECT * FROM users_copy;





