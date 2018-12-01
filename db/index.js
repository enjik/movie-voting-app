var mysql = require('mysql');

// Open up connection
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'password',
  database : 'movie_votes'
});
