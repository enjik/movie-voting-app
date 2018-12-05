import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
  }

  render() {
    let {title, total_votes, up_votes, down_votes} = this.props.info;
    return(
      <li className="movie-member">
        <div>{title}</div>
        <button>Upvotes {up_votes}</button>
        <button>Downvotes {down_votes}</button>
      </li>
    )
  }
}

export default Movie;
