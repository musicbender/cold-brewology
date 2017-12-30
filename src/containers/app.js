import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Link } from 'react-router-dom';

// Global Components
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';

// Pages
import Home from './home';
import Brewers from '../components/brewers';
import Books from '../components/books';
import Accessories from '../components/accessories';
import TestPost from '../components/test-post'
import Article from './article';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/brewers" component={Brewers} />
          <Route path="/books" component={Books} />
          <Route path="/accessories" component={Accessories} />
          <Route path="/article/:article" component={Article} />
          <Route path="/post-tester" component={TestPost} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
