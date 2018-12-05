import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './components/MovieList.jsx';
import MovieForm from './components/MovieForm.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    };
    this.handleNewMovie=this.handleNewMovie.bind(this);
  }

  componentDidMount() {
    axios.get('/api/movies')
    .then(response => {
      console.log(response.data);
      this.setState({
        movies: response.data
      })
    })
    .catch(error => console.log('Axios could not retrieve movies:', error));
  }

  handleNewMovie(newtitle) {
    // Post request
    axios.post('/api/movies', {title: newtitle})
    .then(response => {
      // Get new list of all movies
      axios.get('/api/movies')
      .then(response => {
        console.log(response.data);
        this.setState({
          movies: response.data
        })
      })
      .catch(error => console.log('Axios could not retrieve movies:', error))
    })
    .catch(error => console.log('Axios could not post new movie:', error))
  }

  render() {
    return (
      <div>
        <MovieForm handleClick={this.handleNewMovie}/>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
