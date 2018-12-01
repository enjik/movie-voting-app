const express = require('express');
const bodyParser = require('body-parser');

// New instance of application
const app = express();

// Port to listen to
const PORT = 3000;

// Get all movies by desc number of movie votes
app.get('/api/movies', (req, res) => {

});

// Add new movie to list
app.post('/api/movies', (req, res) => {

});

// Upvote a movie
app.post('/api/movies/:movieId/like', (req, res) => {

});

// Downvote a movie
app.post('/api/movies/:movieId/dislike', (req, res) => {

});




app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
