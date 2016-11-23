
CREATE DATABASE Laundr_db;
USE Laundr_db;

CREATE TABLE washers
(
	id int NOT NULL AUTO_INCREMENT,
	washer_name varchar(70) NOT NULL,
	washer_email varchar(255) NOT NULL,
	washer_address varchar(255) NOT NULL,
	phone_number varchar(20) NOT NULL,
	url varchar(2083) 
	member BOOLEAN DEFAULT TRUE,
	date DATETIME NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE clients
(
	id int NOT NULL AUTO_INCREMENT,
	client_name varchar(70) NOT NULL,
	client_email varchar(255) NOT NULL,
	client_address varchar(255) NOT NULL,
	phone_number varchar(20) NOT NULL,
	url varchar(2083) NOT NULL,
	member BOOLEAN DEFAULT TRUE,
	date DATETIME NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE client_order_history
(
	id int NOT NULL AUTO_INCREMENT,
	availability varchar(70) NOT NULL,
	amount_lbs DECIMAL(10,2) NOT NULL,
	status BOOLEAN DEFAULT false,
	date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE washer_order_history
(
	id int NOT NULL AUTO_INCREMENT,
	availability varchar(70) NOT NULL,
	amount_lbs DECIMAL(10,2) NOT NULL,
	status BOOLEAN DEFAULT false,
	date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);
