import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReviewList from './ReviewList';

class Content extends Component {


  // handleClick(event) {
    
  // }

  render() {

    return (
      <div id={`content-${this.props.id}`}>
        <h3>{`${this.props.title} (${this.props.year})`}</h3>
        <button onClick={(event)=>{
          // parseInt(event.target.innerText) + this.props.inc
          event.target.innerText =  parseInt(event.target.innerText) + this.props.inc

          }}>
          0
        </button>
        {/* <button onClick={this.handleClick}>0</button> */}

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