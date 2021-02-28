import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import List from './List.js';
import Home from './Home.js';
import Header from './Header.js';
import Detail from './Detail.js';
import Create from './Create.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              component={Home}
            />
            <Route
              path="/clothes"
              exact
              component={List}
            />
            <Route
              path="/clothes/:itemId"
              exact
              component={Detail}
            />
            <Route
              path="/create"
              exact
              component={Create}
            />
          </Switch>
        </Router>
        <footer>
          Contact info goes here
                </footer>
      </div>
    )
  }
}

