import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchArticle, fetchArticleSuccess, fetchArticleFailure } from '../../actions/articles';
import './article.scss';

class Article extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchArticle, match } = this.props;
    
    fetchArticle(match.params.article || window.location.pathname.slice(9));
  }

  render() {
    return (
      <div className="article">
        ARTICLE HERE
      </div>
    );
  }
}

const mapStateToProps = ({ articles }) => {
  const { activeArticle: { article, error, loading }} = articles;
  return {
    article,
    error,
    loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchArticle: article => {
      dispatch(fetchArticle(article))
        .then(result => {
          const { payload } = result;
          if (payload && payload.status !== 200) {
            dispatch(fetchArticleFailure(payload.data.message));
          } else {
            dispatch(fetchArticleSuccess(payload.data.data));
          }
        })
        .catch(err => {
          dispatch(fetchArticleFailure(err));
        });
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Article));
