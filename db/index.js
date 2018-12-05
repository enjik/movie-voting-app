const mysql = require('mysql');

// Open up connection
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'password',
  database : 'movie_votes'
});

// Get all movies by desc number of movie votes
const selectAll = callback => {
  connection.query('SELECT * FROM movies ORDER BY total_votes DESC', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// Post movie by title to db
const postMovie = (title, callback) => {
  connection.query(`INSERT INTO movies (title, total_votes, up_votes, down_votes) VALUES (${title}, 0, 0, 0)`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const postUpvote = (movieId, callback) => {
  connection.query(`UPDATE movies SET up_votes=up_votes + 1 WHERE id=${movieId}`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const postDownvote = (movieId, callback) => {
  connection.query(`UPDATE movies SET down_votes=down_votes + 1 WHERE id=${movieId}`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
module.exports.selectAll = selectAll;
module.exports.postMovie = postMovie;
module.exports.postUpvote = postUpvote;
module.exports.postDownvote = postDownvote;
