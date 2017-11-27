import React, { Component } from 'react';
import axios from 'axios';

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
    const { goats, waddup, worked } = this.state.articleData;
    return (
      <div>
        <a className="click-test" onClick={(e) => this.handleClick(e)}>CLICK</a>
        {
          this.state.articleData &&
          <div>
            <div>Goats: {goats}</div>
            <div>Waddup: {waddup}</div>
            <div>Did it work? Yes, it {worked}</div>
          </div>
        }
      </div>
    );
  }
}
export default Home;
