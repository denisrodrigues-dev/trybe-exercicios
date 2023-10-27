-- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.
SELECT
    CONCAT(employee.first_name, " ", employee.last_name) AS "Nome Pessoa Colaboradora",
    CONCAT(manager.first_name, " ", manager.last_name) AS "Nome Gerente"
FROM
    employees AS employee
INNER JOIN
    employees AS manager ON employee.manager_id = manager.employee_id
WHERE
    employee.department_id <> manager.department_id;