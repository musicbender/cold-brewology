import React, { Component } from 'react';
import { APAC, API } from '../../constants/config';

class Store extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    API.get('/get-shop/brewers/1')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className={`store`}>

      </div>
    );
  }
}
export default Store;
