DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;
 
CREATE TABLE orders(
id INT(100) AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
devoured BOOLEAN
);