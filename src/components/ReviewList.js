import React, { Component } from 'react';
import Review from './Review';

class ReviewList extends Component {

  render() {
    return (
      <div className={`${this.props.content_id}-reviews`}>
        <h4>Review List</h4>
        {this.props.reviews && this.props.reviews.map(review =>
          <Review 
            key={review.id} 
            id={review.id}
            content_id={review.content_id} 
            username={review.username}
            rating={review.rating}
            description={review.description}
          />
        )}
      </div>
    )
  }

}

export default ReviewList;