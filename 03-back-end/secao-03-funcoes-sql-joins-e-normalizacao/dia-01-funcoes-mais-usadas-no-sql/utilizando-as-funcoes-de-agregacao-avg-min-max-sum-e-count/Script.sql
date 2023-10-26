-- Monte um query que exiba:
-- A média de duração dos filmes e dê o nome da coluna de ‘Media de Duracao’;
-- A duração mínima dos filmes como ‘Duracao Minima’;
-- A duração máxima dos filmes como ‘Duracao Maxima’;
-- A soma de todas as durações como ‘Tempo de Exibicao Total’;
-- E, finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como ‘Filmes Registrados’.

SELECT 
	AVG(length) AS 'Media de Duracao',  
	MIN(length) AS 'Duracao Minima',
	MAX(length) AS 'Duracao Maxima',
	SUM(length) AS 'Tempo de Exibicao Total',
	COUNT(*) AS 'Filmes Registrados'
FROM
	film;

