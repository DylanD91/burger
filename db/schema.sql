-- Creating the database
DROP DATABASE burger_db;
-- using the database
USE burger_db;
-- creating a table
CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT, 
	burger_name VARCHAR'(255)' NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY '(id)'
);
