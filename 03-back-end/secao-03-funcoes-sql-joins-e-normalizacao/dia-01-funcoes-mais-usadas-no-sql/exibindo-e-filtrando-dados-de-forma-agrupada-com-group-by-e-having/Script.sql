-- Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
SELECT
	active,
	COUNT(*)
FROM
	customer
GROUP BY
	active;
	
-- Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja, o status dos clientes (ativos ou inativos) e a quantidade de clientes por status.
SELECT
	active,
	store_id,
	COUNT(*)
FROM
	customer
GROUP BY
	active,
	store_id;

-- Monte uma query que exiba a média de duração de locação por classificação indicativa (rating) dos filmes cadastrados na tabela sakila.film. Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
SELECT
	AVG(rental_duration) AS avg_rental_duration,
	rating
FROM
	film
GROUP BY
	rating
ORDER BY
	avg_rental_duration DESC;
	
-- Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
SELECT
	district,
	COUNT(address) as quant_address
FROM
	address
GROUP BY
	district
ORDER BY
	quant_address DESC;
	
-- Usando a query a seguir, modifique-a de forma que exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.
-- SELECT rating, AVG(length)
-- FROM sakila.film
-- GROUP BY rating;

SELECT rating, AVG(length) average_duration
FROM film
GROUP BY rating
HAVING average_duration BETWEEN 115.0 AND 121.50
ORDER BY average_duration DESC;

-- Usando a query a seguir, exiba apenas os valores de total do custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
-- SELECT rating, SUM(replacement_cost)
-- FROM sakila.film
-- GROUP by rating;

SELECT rating, SUM(replacement_cost) AS sum_replacement_cost
FROM film
GROUP by rating
HAVING sum_replacement_cost > 3950.50
ORDER BY sum_replacement_cost;
