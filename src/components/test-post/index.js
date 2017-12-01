import React, { Component } from 'react';
import axios from 'axios';


class PostTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ input: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('/api/test-post', {
      post_id: this.state.input
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={(e) => this.handleSubmit(e)}>
            <input onChange={e => this.handleChange(e)}type="text" name="post_id"/>
            <input type="submit" />
        </form>
      </div>
    );
  }
}
export default PostTest;
