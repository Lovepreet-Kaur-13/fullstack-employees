DROP TABLE IF EXISTS employees;

CREATE TABLE employees(
    id serial Primary Key,
    "name" text NOT NULL,
    birthday date NOT NULL,
    salary integer NOT NULL
)




