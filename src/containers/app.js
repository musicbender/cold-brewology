import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';

//Pages
import Home from './home';
import TestPost from '../components/test-post'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/post-tester" component={TestPost} />
        <Footer />
      </div>
    );
  }
}

export default App;
