import React, { Component } from 'react';
import axios from 'axios';


class PostTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      post_id: ''
    }
  }

  handleChange(e, type) {
    e.preventDefault();
    switch(type) {
      case "title":
        this.setState({ title: e.target.value });
        break;
      case "post":
        this.setState({ post_id: e.target.value });
        break;
      default:
        break;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, post_id } = this.state;

    axios.post('/api/test-post', {
      title,
      post_id,
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
        <p>Add a new test post:</p>
        <form action="" onSubmit={(e) => this.handleSubmit(e)}>
          <label>Title</label>
          <input onChange={e => this.handleChange(e, 'title')} id="title" type="text" name="title"/>
          <label>Post ID</label>
          <input onChange={e => this.handleChange(e, 'post')} id="post_id" type="text" name="post_id"/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default PostTest;
