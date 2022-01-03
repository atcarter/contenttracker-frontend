import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContents } from '../actions/contentActions';
import { fetchReviews } from '../actions/reviewActions'
import Content from './Content'

export default function ContentList() {

  const contents = useSelector((state) => state.contents)
  const reviews = useSelector((state) => state.reviews)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContents())
  }, [])

  useEffect(() => {
    dispatch(fetchReviews())
  }, [])



 
  return (
    <div className='content-list'>
      <h2>Content List</h2>
      {contents && contents.map(content => 
        <Content 
          key={content.id} 
          title={content.title} 
          content_type={content.content_type} 
          year={content.year} 
          details={content.details} 
          reviews={reviews.filter(review => review.content_id === content.id)}
        />
      )}
    </div>
  )
  

}