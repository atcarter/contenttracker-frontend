import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';

class ContentList extends Component {

  render() {
    return (
      <div className='content-list'>
        <h2>Content List</h2>
        <p>This is where the movies go</p>
      </div>
    )
  }

}

export default ContentList;