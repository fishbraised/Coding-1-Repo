ALTER TABLE students
ADD COLUMN age INT NOT NULL;

ALTER TABLE students
ADD COLUMN address VARCHAR(100) NOT NULL;

ALTER TABLE students
DROP COLUMN address;


ALTER TABLE students
ADD COLUMN isDeleted BOOL DEFAULT false;

ALTER TABLE learners
MODIFY COLUMN firstname VARCHAR(200);

ALTER TABLE learners
ADD CONSTRAINT UNIQUE(email);

SELECT * FROM learners;


ALTER TABLE students
RENAME COLUMN dob TO dateOfBirth;


RENAME TABLE students TO learners;

RENAME TABLE learners TO students;