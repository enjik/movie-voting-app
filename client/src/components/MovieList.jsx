import React from 'react';
import Movie from './Movie.jsx';

const MovieList = (props) => {
  return (
    <ol className="movie-list">
      {props.movies.map((movie, i) => (
        <Movie info={movie} key={movie.id}/>))}
    </ol>
  )
}

export default MovieList;
