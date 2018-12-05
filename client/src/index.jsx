import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './components/MovieList.jsx';
import MovieForm from './components/MovieForm.jsx';

const App = (props) => (
  <div>
    <div>Hello</div>
    <MovieList />
    <MovieForm />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
