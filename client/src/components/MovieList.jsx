import React from 'react';
import Movie from './Movie.jsx';

const MovieList = (props) => {
  return (
    <ol class="movie-list">
      {props.movies.map(movie => (
        <Movie info={movie} />))}
    </ol>
  )
}

export default MovieList;
