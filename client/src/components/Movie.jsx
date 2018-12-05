import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <li class="movie-member">
        <div>Upvote</div>
        <div>DownVote</div>
      </li>
    )
  }
}

export default Movie;
