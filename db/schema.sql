CREATE DATABASE: burgers.db;
USE: burgers.db;

CREATE TABLE: burgers
(
    id int NOT NULL AUTO_INCREMENT,
    NAME burger_name varchar(255) NOT NULL,
    devoured BOOLEAN default false,
    PRIMARY KEY (id)
);

INSERT INTO burger_name (name) VALUES ('Cheeseburger');
INSERT INTO burger_name (name) VALUES ('Hamburger');
INSERT INTO burger_name (name) VALUES ('Tacos');