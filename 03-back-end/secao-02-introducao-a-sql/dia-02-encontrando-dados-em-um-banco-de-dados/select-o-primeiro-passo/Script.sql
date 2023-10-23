-- Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
SELECT "Denis", "Rodrigues", "Penedo", 31;

-- Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS, que é chamado de alias na linguagem SQL (alias é como um apelido no português);
SELECT "Denis" as nome, "Rodrigues" as sobrenome, "Penedo" as cidade_natal, 31 as idade;

-- Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT;
SELECT 13 * 8

-- Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome “Data Atual”.
SELECT NOW() as "Data Atual";

-- Escreva uma query que selecione todos os registros da tabela city;
SELECT * FROM sakila.city;

-- Escreva uma query que exiba apenas os registros das colunas first_name e last_name da tabela customer;
SELECT first_name, last_name FROM sakila.customer;

-- Escreva uma query que exiba todos os registros da tabela rental;
SELECT * FROM sakila.rental;

-- Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film;
SELECT title, description, release_year FROM sakila.film;

-- Utilize o SELECT para explorar todas as tabelas do banco de dados.
SELECT * FROM sakila.country;

