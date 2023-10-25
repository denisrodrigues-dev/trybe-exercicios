-- Insira um novo funcionário na tabela sakila.staff.
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('Denis', 'Rodrigues', 3, 'denis@gmail.com', 1, 1, 'denis92', '12345');

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('Rafael', 'Santos', 3, 'rafa@gmail.com', 1, 1, 'rafa10', '51234'),
('Andre', 'Santana', 2, 'andre@gmail.com', 1, 1, 'andre22', '45678');

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name FROM customer
ORDER BY customer_id
LIMIT 5;

-- Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO sakila.category (name)
VALUES('Sci-Fi'),
('Fantasy'),
('Biography');

-- Cadastre uma nova loja na tabela sakila.store.
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);