import React, { Component,Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js'


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Nav />
      </Fragment>
    );
  }
}

export default App;
