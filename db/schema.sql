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

INSERT INTO movies (title, total_votes, up_votes, down_votes)
VALUES
  ("A Star is Born", 47, 40, 7),
  ("Avengers: Infinity War", 140, 120, 20),
  ("Ralph Breaks the Internet", 98, 83, 15),
  ("Black Panther", 135, 130, 5),
  ("Mary Poppins Returns", 24, 24, 0),
  ("Incredible 2", 87, 83, 4),
  ("Searching", 54, 44, 10),
  ("Crazy Rich Asians", 105, 80, 25);
