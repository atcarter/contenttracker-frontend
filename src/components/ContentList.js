import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContents } from '../actions/contentActions';

export default function ContentList() {

  const contents = useSelector((state) => state.contents)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContents())
  })



 
  return (
    <div className='content-list'>
      <h2>Content List</h2>
      <p>This is where the movies go</p>
    </div>
  )
  

}