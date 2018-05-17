CREATE DATABASE fitness_db;
USE fitness_db;

CREATE TABLE fitness
(
	id int NOT NULL AUTO_INCREMENT,
	date varchar(255) NOT NULL,
    stepCount INT(100) NOT NULL,
    mood INT(10) NOT NULL,
    caloriesBurned INT(10) NOT NULL,
    hoursOfSleep INT(10) NOT NULL,
    boolOfActive INT(10) NOT NULL,
    weighKG INT(10) NOT NULL,
	sleepy BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);