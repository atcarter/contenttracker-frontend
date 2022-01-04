import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContentList from './components/ContentList';
import About from './components/About';
import ContentForm from './components/ContentForm';
import ReviewForm from './components/ReviewForm';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/contents" component={ContentList}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contents/new" component={ContentForm}/>
          <Route exact path="/contents/:contentID/review" component={ReviewForm} />
        </Switch>
      </div>
    );
  }

}

export default connect()(App);