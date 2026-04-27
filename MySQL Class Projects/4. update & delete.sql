UPDATE students
SET email = "bob2@gmail.com", lastname = "Milan"
WHERE id = 9;

UPDATE students
SET psp = 100.0
WHERE id >= 9;

UPDATE students
SET psp = 90.0;

UPDATE students
SET psp = psp+5
WHERE id = 9;

DELETE FROM students
WHERE id = 11;

DELETE FROM students
WHERE id > 9;

DELETE FROM students;

CREATE TABLE backupStudents
SELECT * FROM students;

DELETE FROM backupStudents
WHERE id = 13;

-- 1. export
-- 2. make a copy
-- 3. transaction
-- 4. soft delete (maintain sth like a isDelete column)

SELECT * FROM backupStudents;

SELECT * FROM students;

UPDATE students
SET isDeleted = true
WHERE id = 16;