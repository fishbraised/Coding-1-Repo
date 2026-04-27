SELECT * FROM students;

INSERT INTO students (firstname, lastname, email)
VALUES
("John", "Doe", "JH@gmail.com"),
("Mary", "Jane", "MJ@gmail.com");

INSERT INTO students
VALUES
("Kim", "Jo", "KJ@gmail.com");

INSERT INTO students (firstname, lastname, email)
VALUES
('Alice', 'Williams', 'alice@gmail.com'),
('Bob', 'Miller', 'bob@gmail.com'),
('Charlie', 'Davis', 'charlie@gmail.com'),
('Diana', 'Evans', 'diana@gmail.com'),
('Ethan', 'Harris', 'ethan@gmail.com');

CREATE TABLE studentsPsp (
	id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
	lastname VARCHAR(50) NOT NULL,
	psp DECIMAL DEFAULT 0.0
);

SELECT * FROM studentsPsp;

INSERT INTO studentsPsp (firstname, lastname)
SELECT firstname, lastname
FROM students;

