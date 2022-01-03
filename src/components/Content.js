import React, { Component } from 'react';
import { ReviewList } from './ReviewList';

class Content extends Component {

  render() {

    return (
      <div id={`${this.props.content_id}-content`}>
        <h3>{`${this.props.title} (${this.props.year})`}</h3>
        <p>{this.props.description}</p>
        <ReviewList reviews={this.props.reviews} content_id={this.props.content_id} />
      </div>
    )
  }

}

export default Content;