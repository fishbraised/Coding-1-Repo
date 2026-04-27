-- Q1. Create Table - User

CREATE TABLE instructor (
	instructor_id INT PRIMARY KEY,
    `name` VARCHAR(100),
    expertise VARCHAR(100)
);

CREATE TABLE course (
	course_id INT PRIMARY KEY,
    title VARCHAR(100),
    instructor_id INT,
    
    FOREIGN KEY (instructor_id) REFERENCES instructor(instructor_id)
    ON DELETE CASCADE
);

CREATE TABLE student (
	student_id INT PRIMARY KEY,
    `name` VARCHAR(100),
    email VARCHAR(100),
	referred_by INT DEFAULT NULL,
    
    FOREIGN KEY (referred_by) REFERENCES student(student_id)
    ON DELETE CASCADE
);

CREATE TABLE review (
	review_id INT PRIMARY KEY,
    content VARCHAR(100),
    rating INT CHECK(rating BETWEEN 1 AND 5),
    created_at DATETIME DEFAULT NOW(),
	student_id INT,
    course_id INT,
    
    FOREIGN KEY (student_id) REFERENCES student(student_id)
    ON DELETE CASCADE,
    
	FOREIGN KEY (course_id) REFERENCES course(course_id)
    ON DELETE CASCADE
);


-- Q2. Insert Sample Data

INSERT INTO instructor (instructor_id, `name`, expertise)
VALUES 
(1, 'John Smith', 'Data Science'),
(2, 'Emily Johnson', 'Web Development'),
(3, 'Michael Brown', 'Machine Learning');

INSERT INTO course (course_id, title, instructor_id)
VALUES
(1, 'Python for Beginners', 1),
(2, 'Advanced Data Science', 1),
(3, 'Full-Stack Web Development', 2),
(4, 'Intro to Machine Learning', 3);

INSERT INTO student (student_id, `name`, email, referred_by)
VALUES
(1, 'Alice Williams', 'alice@gmail.com', NULL),
(2, 'Bob Miller', 'bob@gmail.com', 1),
(3, 'Charlie Davis', 'charlie@gmail.com', NULL),
(4, 'Diana Evans', 'diana@gmail.com', NULL),
(5, 'Ethan Harris', 'ethan@gmail.com', NULL);

INSERT INTO review (review_id, student_id, course_id, rating, content)
VALUES
(1, 1, 1, 4, 'Great intro course!'),
(2, 5, 1, 5, 'Very beginner-friendly.'),
(3, 2, 2, 3, 'A bit tough but informative.'),
(4, 3, 3, 5, 'Loved the projects.'),
(5, 4, 4, 4, 'Well explained concepts.'),
(6, 1, 3, 3, 'Good but could be faster paced.');


-- Q3. List all courses with instructors.

SELECT title, `name`, expertise
FROM course
JOIN instructor
USING(instructor_id);


-- Q4. List All Students & Referrals 

SELECT a.name as student_name, b.name as referrer_name
FROM student a
JOIN student b
ON a.referred_by = b.student_id;


-- Q5. Effect of ON DELETE CASCADE in Self Join

DELETE FROM student WHERE student_id = 1;


-- Q6. List Reviews with Student Names

SELECT review_id, content, rating, `name` as student_name
FROM review
JOIN student
USING (student_id);


-- Q7. Reviews for a Specific Course

SELECT review_id, content, rating, `name` as student_name
FROM review r
JOIN student s
USING (student_id)
JOIN course c
ON r.course_id = c.course_id && c.course_id = 4;


-- Q8. Reviews with Student, Course & Instructor

SELECT review_id, content, rating, s.`name` as student_name, title as course_title, i.`name` as instructor_name
FROM review r
JOIN student s
USING (student_id)
JOIN course c
USING (course_id)
JOIN instructor i
USING (instructor_id);


-- Q9. Find Students Who Reviewed Emily’s Courses

SELECT s.`name` as student_name
FROM student s
JOIN review r
USING (student_id)
JOIN course c
ON r.course_id = c.course_id && c.instructor_id = 2;


-- Q10. Reviews based on multiple conditions (Compound Join)

SELECT review_id, `name` as student_name, title as course_title, content as `comment`, rating
FROM review r
JOIN student s
ON r.student_id = s.student_id && rating >= 4
JOIN course c
USING (course_id);


-- Q11. Instructors with At Least 2 Courses

SELECT `name` as instructor_name, expertise, count(instructor_id) as num_of_courses
FROM instructor
JOIN course
USING (instructor_id)
GROUP BY instructor_id;


-- Q12. Students with Multiple Course Reviews

SELECT s.`name`, count(s.student_id) as num_of_courses_reviewed
FROM student s
JOIN review r
ON s.student_id = r.student_id
GROUP BY r.student_id
HAVING count(r.student_id) > 1;

UPDATE review
SET student_id = 5
WHERE student_id = 3;

SELECT * FROM instructor;
SELECT * FROM course;
SELECT * FROM student;
SELECT * FROM review;

