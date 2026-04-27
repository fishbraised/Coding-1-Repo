SET AUTOCOMMIT = 0;

START TRANSACTION;

SELECT * FROM payment;

UPDATE payment
SET amount = 50
WHERE payment_id = 3;

UPDATE payment
SET amount = 10
WHERE payment_id = 4;

UPDATE payment
SET amount = 90
WHERE payment_id = 5;

COMMIT;

ROLLBACK;


SELECT @@transaction_isolation;

SET AUTOCOMMIT = 0;
-- SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
-- SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- START TRANSACTION;

-- SELECT * FROM payment;

-- UPDATE payment
-- SET amount = 900
-- WHERE payment_id = 5;

-- COMMIT;
-- ROLLBACK;

-- SET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ;

-- START TRANSACTION;

-- SELECT * FROM payment;

-- UPDATE payment
-- SET amount = 300
-- WHERE payment_id = 1;

-- COMMIT;
-- ROLLBACK;

SET SESSION TRANSACTION ISOLATION LEVEL SERIALIZABLE;

START TRANSACTION;

SELECT * FROM payment;

UPDATE payment
SET amount = 100
WHERE payment_id = 2;

COMMIT;
ROLLBACK;

-- TO-DO:
-- 1. Serializable example.
-- 2. Terms to be explained for the quiz.
