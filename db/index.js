const mysql = require('mysql');

// Open up connection
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'password',
  database : 'movie_votes'
});
