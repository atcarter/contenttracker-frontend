import { useDispatch } from 'react-redux';
import Review from './Review';
import { deleteReview } from '../actions/reviewActions';

export default function ReviewList (props) {

  const dispatch = useDispatch()
  const handleDelete = (reviewID) => {
    dispatch(deleteReview(reviewID))
  }


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
          delete={handleDelete}
        />
      ))}
    </div>
  )

}
