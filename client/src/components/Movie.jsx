import React from 'react';
import axios from 'axios';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.info.id,
      title: this.props.info.title,
      up_votes: this.props.info.up_votes,
      down_votes: this.props.info.down_votes,
      total_votes: this.props.info.total_votes
    }
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
  }

  handleUpvote(event) {
    let movieId = event.target.getAttribute('movie-id');
    axios.post(`/api/movies/${movieId}/like`)
    .then(response => this.setState({
      up_votes: this.state.up_votes + 1
    }))
    .catch(error => console.log('Axios could not post upvote:', error));
  }

  handleDownvote(event) {
    let movieId = event.target.getAttribute('movie-id');
    axios.post(`/api/movies/${movieId}/dislike`)
    .then(response => this.setState({
      down_votes: this.state.down_votes + 1
    }))
    .catch(error => console.log('Axios could not post downvote:', error));
  }

  render() {
    return(
      <li className="movie-member">
        <div>{this.state.title}</div>
        <button movie-id={this.state.id} onClick={this.handleUpvote}>Upvotes {this.state.up_votes}</button>
        <button movie-id={this.state.id} onClick={this.handleDownvote}>Downvotes {this.state.down_votes}</button>
      </li>
    )
  }
}

export default Movie;
