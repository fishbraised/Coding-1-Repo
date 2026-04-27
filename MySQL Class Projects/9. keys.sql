use lewisdb;

CREATE TABLE students (
	id INT AUTO_INCREMENT,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50),
    email VARCHAR(50) UNIQUE NOT NULL,
    DOB DATE,
    enrollDate DATE, 
    PSP DECIMAL DEFAULT 0.0 CHECK(PSP BETWEEN 0.0 AND 100.0),
    batch INT DEFAULT 1,
    
    PRIMARY KEY (id, email)
    

);

ALTER TABLE students
ADD FOREIGN KEY (batch) REFERENCES batch(id)
ON DELETE CASCADE
ON UPDATE SET NULL;

DROP TABLE students;



CREATE TABLE batch (
	id INT AUTO_INCREMENT PRIMARY KEY,
    batchName VARCHAR(50) NOT NULL,
    endDate DATE
);

INSERT INTO students (firstName, email, PSP, batch)
VALUES
("John", "johnbraised@gmail.com", 50, 2),
("Mary", "marybraised@gmail.com", 50, 3),
("Kim", "kimbraised@gmail.com", 50, 2);

INSERT INTO batch (batchName, endDate)
VALUES
("Beginner React", "2008-01-24"),
("Intermediate React", "2009-01-24"),
("Advanced React", "2010-01-24");

SELECT * FROM students;

SELECT * FROM batch;

UPDATE batch
SET id = 20
WHERE id = 2;

DELETE FROM batch
WHERE id = 3;

