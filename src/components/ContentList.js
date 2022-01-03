import { useSelector, useDispatch } from 'react-redux';

export default function ContentList() {

  const contents = useSelector((state) => state)
  const dispatch = useDispatch()


 
  return (
    <div className='content-list'>
      <h2>Content List</h2>
      <p>This is where the movies go</p>
    </div>
  )
  

}

export default ContentList;