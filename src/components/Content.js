import React, { Component } from 'react';
import { ReviewList } from './ReviewList';

class Content extends Component {

  render() {

    return (
      <div id={`content-${this.props.content_id}`}>
        <h3>{`${this.props.title} (${this.props.year})`}</h3>
        <i>{this.props.content_type}</i>
        <p>{this.props.description}</p>
        <ReviewList reviews={this.props.reviews} content_id={this.props.content_id} />
      </div>
    )
  }

}

export default Content;