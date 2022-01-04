// import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Review from './Review';

export default function ReviewList (props) {
  // const reviewsTotal = useSelector((state) => state.reviews)
  // const reviews = reviewsTotal.filter(review => review.content_id === props.content_id)
  const dispatch = useDispatch()

  return (
    <div className={`${props.content_id}-reviews`}>
      <h4>Review List</h4>
      {props.reviews && props.reviews.map(review => (
        <Review 
          key={`review-${review.id}`} 
          id={review.id}
          content_id={review.content_id} 
          username={review.username}
          rating={review.rating}
          description={review.description}
        />
      ))}
    </div>
  )

}

// class ReviewList extends Component {

//   render() {
//     return (
//       <div className={`${this.props.content_id}-reviews`}>
//         <h4>Review List</h4>
//         {this.props.reviews && this.props.reviews.map(review =>
//           <Review 
//             key={`review-${review.id}`} 
//             id={review.id}
//             content_id={review.content_id} 
//             username={review.username}
//             rating={review.rating}
//             description={review.description}
//           />
//         )}
//       </div>
//     )
//   }

// }

// export default ReviewList;