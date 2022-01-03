import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';

class ReviewList extends Component {

  render() {
    return (
      <div className='#review-list'> //need to add content id here
        <h2>Review List</h2>
        <p>This is where the reviews go</p>
      </div>
    )
  }

}

export default ReviewList;