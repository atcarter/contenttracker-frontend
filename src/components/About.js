import React, { Component } from 'react';

class About extends Component {

  render() {
    return (
      <div className='about'>
        <h2>About Page</h2>
        <p>This is a content tracking web application that allows a user/users to create a list of content they plan to consume i.e. books, movies, videogames, etc. A user is able to view their content and their relevant reviews, add/delete content, and add/delete reviews.</p>
        <a href='https://github.com/atcarter/contenttracker-frontend'>Here is the link to the frontend repository.</a>
      </div>
    )
  }

}

export default About;