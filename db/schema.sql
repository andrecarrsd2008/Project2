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
	user_ID int FOREIGN KEY references users(user_ID)
);

CREATE TABLE users
(
    user_ID int NOT NULL AUTO_INCREMENT,
    user_name varchar(100),
    user_Email varchar(100),
    user_password varchar(100),
    PRIMARY KEY (user_ID)
);