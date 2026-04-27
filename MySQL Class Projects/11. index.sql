SELECT * FROM FILM;

DROP INDEX idx_title
ON film;

EXPLAIN ANALYZE SELECT *
FROM film
WHERE title = "ACE GOLDFINGER";

-- '-> Filter: (film.title = \'ACE GOLDFINGER\')  (cost=103 rows=100) (actual time=0.144..2.49 rows=1 loops=1)\n    
-- -> Table scan on film  (cost=103 rows=1000) (actual time=0.134..2.25 rows=1000 loops=1)\n'

CREATE INDEX idx_title
ON film (title);

-- '-> Index lookup on film using idx_title (title=\'ACE GOLDFINGER\')
-- (cost=0.35 rows=1) (actual time=0.048..0.0539 rows=1 loops=1)\n'


EXPLAIN ANALYZE SELECT * FROM FILM 
WHERE description LIKE "%Drama%";

-- -> Filter: (film.`description` like '%Drama%')  (cost=103 rows=111) (actual time=0.0757..2.2 rows=106 loops=1)
    --  -> Table scan on FILM  (cost=103 rows=1000) (actual time=0.0605..1.25 rows=1000 loops=1)
 

CREATE INDEX idx_dex ON film(description(50));

-- -> Filter: (film.`description` like '%Drama%')  (cost=103 rows=111) (actual time=0.035-- 6..2.17 rows=106 loops=1)
--      -> Table scan on FILM  (cost=103 rows=1000) (actual time=0.0328..1.49 rows=1000 loops=1)
 
 DROP INDEX idx_dex ON film;
 
 CREATE INDEX idx_dex ON film(description(5));
-- -> Filter: (film.`description` like '%Drama%')  (cost=103 rows=111) (actual time=0.0387..1.94 rows=106 loops=1)
--      -> Table scan on FILM  (cost=103 rows=1000) (actual time=0.0353..1.06 rows=1000 loops=1)
 
 