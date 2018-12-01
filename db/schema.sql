DROP DATABASE IF EXISTS movie_votes;

CREATE DATABASE movie_votes;
USE movie_votes;

CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(100) NOT NULL,
  total_votes int NOT NULL,
  up_votes int NOT NULL,
  down_votes int NOT NULL,
  PRIMARY KEY (id)
);
