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
        <button onClick={() => this.props.delete(this.props.id)}> Delete {this.props.title} </button>
        <ReviewList reviews={this.props.reviews} content_id={this.props.id} />
        <Link to={`/contents/${this.props.id}/reviews/new`}>New Review</Link>
      </div>
    )
  }

}

export default Content;