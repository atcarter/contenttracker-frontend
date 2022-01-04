import React, { Component } from 'react';

class Review extends Component {

  render() {

    return (
      <div id={`review-${this.props.id}`}>
        <strong>{`${this.props.username} - ${"*".repeat(this.props.rating)}\t\t`}</strong><button onClick={() => this.props.delete(this.props.id)}> X </button>
        <p>{this.props.description}</p>
      </div>
    )
  }

}

export default Review;