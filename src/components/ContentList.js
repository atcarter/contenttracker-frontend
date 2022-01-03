import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContents } from '../actions/contentActions';
import Content from './Content'

export default function ContentList() {

  const contents = useSelector((state) => state.contents)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContents())
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
          reviews={content.reviews}
        />
      )}
    </div>
  )
  

}