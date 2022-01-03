import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';

class Review extends Component {

  render() {

    return (
      <div id={`review-${this.props.id}`}>
        <strong>{`${this.props.username} - ${"*".repeat(this.props.rating)}`}</strong>
        <p>{this.props.description}</p>
      </div>
    )
  }

}

export default Review;