use schooldb;

DROP TABLE students;

CREATE TABLE students (
	id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    dob DATE,
    enrollDate DATE,
    batchId INT DEFAULT 1,
    admissionStatus VARCHAR(20),
    psp DECIMAL DEFAULT 0.0 CHECK(psp BETWEEN 0.0 AND 100.0)
    );
    
-- INSERT into [table_name] (col1, col2, col3,...) 
-- VALUES 
-- (val1, Functionsval2, val3, ....)
-- (val1, val2, val3, ....)
-- (val1, val2, val3, ....);

INSERT into students (id, firstname, lastname, email)
VALUES
(1, "Lewis", 'Lye', "lewis@gmail.com"),
(2, "Lewis", 'Lye', "lewis2@gmail.com"),
(5, "Lewis", 'Lye', "lewis3@gmail.com");

INSERT into students (id,firstname, lastname, email)
VALUES
(10, "Lewis", 'Lye', "lewis4@gmail.com");

INSERT into students (firstname, lastname, email)
VALUES
("Lewis", 'Lye', "lewis5@gmail.com");

select * from students;


