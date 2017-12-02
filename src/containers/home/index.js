import React, { Component } from 'react';
import Header from '../../components/main-header';
import HomeCTABar from '../../components/home-cta-bar';
import ArticleList from '../../components/article-list';
import Footer from '../../components/footer';
import axios from 'axios';
import './home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleData: false
    }
  }

  handleClick(e) {
    e.preventDefault();
    axios.get('/api/get-article')
      .then(res => {
        console.log(res);
        this.setState({
          articleData: res.data.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="home">
        <Header />
        <HomeCTABar />
        <ArticleList />
      </div>
    );
  }
}

export default Home;
