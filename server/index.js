const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/index.js');

// New instance of application
const app = express();

// Port to listen to
const PORT = 3000;

// Serve static files
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Get all movies by desc number of movie votes
app.get('/api/movies', (req, res) => {
  db.selectAll((err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

// Add new movie to list
app.post('/api/movies', (req, res) => {
  console.log('req', req.body.title);
  db.postMovie(JSON.stringify(req.body.title), (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

// Upvote a movie
app.post('/api/movies/:movieId/like', (req, res) => {
  db.postUpvote(req.params.movieId, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

// Downvote a movie
app.post('/api/movies/:movieId/dislike', (req, res) => {
  db.postDownvote(req.params.movieId, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
