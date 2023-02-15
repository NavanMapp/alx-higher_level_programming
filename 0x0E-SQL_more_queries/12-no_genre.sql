-- Write a script that lists all shows contained in hbtn_0d_tvshows without a genre linked.
-- Import the database dump from hbtn_0d_tvshows to your MySQL server: download (same as 11-genre_id_all_shows.sql)
SELECT s.`title`, g.`genre_id` FROM `tv_shows` AS s LEFT JOIN `tv_show_genres` AS g ON s.`id` = g`.genre_id` IS NULL ORDER BY s.`title`, g.`genre_id`;
