import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('clicked');
  }

  render() {
    return (
      <div>
        <a className="click-test" onClick={(e) => this.handleClick(e)}>CLICK</a>
      </div>
    );
  }
}
export default Home;
