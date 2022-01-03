import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/contents" component={ContentList}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </div>
    );
  }

}

export default connect()(App);