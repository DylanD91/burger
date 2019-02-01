-- Creating the database
CREATE DATABASE burger_db;
-- using the database
USE burger_db;
-- creating a table
CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT 0,
	date TIMESTAMP,
	PRIMARY KEY (id)
);
