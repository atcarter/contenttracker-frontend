import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={}/>
      </Switch>
    </div>
  );
}

export default App;