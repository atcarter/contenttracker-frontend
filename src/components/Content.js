import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReviewList from './ReviewList';

class Content extends Component {

  render() {

    return (
      <div id={`content-${this.props.id}`}>
        <h3>{`${this.props.title} (${this.props.year})`}</h3>
        <i>{this.props.content_type}</i>
        <p>{this.props.details}</p>
        <ReviewList reviews={this.props.reviews} content_id={this.props.id} />
        <Link to={`/contents/${this.props.id}/review`}>New Review</Link>
      </div>
    )
  }

}

export default Content;