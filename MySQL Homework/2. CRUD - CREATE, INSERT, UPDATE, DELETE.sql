CREATE TABLE countries (
	country_id INT,
    country_name VARCHAR(50)
);

INSERT INTO countries (country_id, country_name)
VALUES
(1, "India"),
(2, "SriLanka"),
(3, "Russia");

SELECT * FROM countries;


CREATE TABLE students (
	student_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(200) NOT NULL,
    email VARCHAR(200) UNIQUE,
    age INT CHECK(age >= 5),
    city VARCHAR(200),
    join_date DATE DEFAULT "2025-11-1"
);

SELECT * FROM students;


CREATE TABLE student_courses (
	course_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(200) NOT NULL,
    course_name VARCHAR(200) NOT NULL,
	course_status VARCHAR(200) CHECK(course_status IN ("active", "completed", "cancelled"))
);

DROP TABLE student_courses;

--     course_status VARCHAR(200) CHECK (
-- 		course_status = "active" OR
--         course_status = "completed" OR
--         course_status = "cancelled"
-- 	)

SELECT * FROM student_courses;


ALTER TABLE students
ADD COLUMN phone_number TEXT;

SELECT * FROM students;


ALTER TABLE students
RENAME COLUMN email TO student_email;

SELECT * FROM students;


INSERT INTO students (student_id, full_name, student_email, age, city, join_date)
VALUES
(202, 'Arjun Shah', 'arjun.sh@gmail.com', 13, 'Ahmedabad', '2025-07-10');

INSERT INTO students (full_name, student_email, age)
VALUES
('Amit Patel', 'amit.patel@gmail.com', 11);

INSERT INTO students (full_name, student_email, age, city, join_date)
VALUES
('Priya Singh', 'priya.s@uni.edu', 18, 'Mumbai', '2025-06-25');

INSERT INTO students (student_id, full_name, student_email, age)
VALUES
(205, 'Dhoni MS', 'dhoni.ms@gmail.com', 35);

SELECT * FROM students;


INSERT INTO student_courses (student_name, course_name, course_status)
SELECT
    full_name,
    'Introduction to Programming',
    'active'
FROM students;

SELECT * FROM students;

SELECT * FROM student_courses;


UPDATE students
SET full_name = UPPER(full_name)
WHERE student_email LIKE "%@gmail.com";

SELECT * FROM students;


DELETE FROM students
WHERE full_name LIKE "a%";

SELECT * FROM students;


SELECT film_id, title, length
FROM film
ORDER BY length ASC
LIMIT 10;