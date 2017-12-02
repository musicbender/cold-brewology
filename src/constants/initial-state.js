const initialState = {
  articles: {
    postsList: {
      posts: [],
      error: null,
      loading: false
    },
  	newPost: {
      post: null,
      error: null,
      loading: false
    },
  	activePost: {
      post: null,
      error: null,
      loading: false
    },
  	deletedPost: {
      post: null,
      error: null,
      loading: false
    },
  },
}

export default initialState;
