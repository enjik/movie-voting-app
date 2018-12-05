import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './components/MovieList.jsx';
import MovieForm from './components/MovieForm.jsx';

const exampleMovies = ["A", "B", "C", "D"];
const App = (props) => (
  <div>
    <MovieForm />
    <MovieList movies={exampleMovies} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
