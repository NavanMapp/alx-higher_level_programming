-- Write a script that lists all shows contained in hbtn_0d_tvshows that have at least one genre linked.
SELECT DISTINCT `name`
    FROM `tv_genres` AS g
        INNER JOIN `tv_show_genres` AS s
        ON g.`id` = s.`genre_id`

        INNER JOIN `tv_shows` AS t
        ON s.`show_id` = t.`id`
        WHERE g.`name` NOT IN
                    (SELECT `name`
                        FROM `tv_genres` AS g
                            INNER JOIN `tv_show_genres` AS s
                            ON g.`id` = s`genre_id`

                            INNER JOIN `tv_shows` AS t
                            ON s`show_id` = t.`id`
                            WHERE t.`title` = "Dexter")
    ORDER BY g.`name`;
