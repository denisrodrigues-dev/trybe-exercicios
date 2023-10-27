-- Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.
SELECT
	m.title,
	m.director,
	m.year,
	m.length_minutes,
	b.rating
FROM
	movies AS m
INNER JOIN box_office AS b ON
	m.id = b.movie_id
WHERE
	rating > 8
	AND m.theater_id IS NOT NULL;