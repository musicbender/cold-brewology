import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchArticle, fetchArticleSuccess, fetchArticleFailure } from '../../actions/articles';
import { formatDate } from '../../util/date';
import './article.scss';

class Article extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchArticle, match } = this.props;

    fetchArticle(match.params.article || window.location.pathname.slice(9));
  }

  renderBody(body) {
    return { __html: body };
  }

  renderArticle() {
    const { article, loading, error } = this.props;

    switch (true) {
      case loading: {
        return (
          <p>Loading...</p>
        );
      }
      case error: {
        return (
          <p>{error}</p>
        );
      }
      case article !== null: {
        const { title, body, likes, hidden, author, date, comments } = article;
        const dateString = formatDate(date);

        return (
          <div className="article-wrapper">
            <h1>{title}</h1>
            <h2>By {author} / {dateString}</h2>
            <div className="article-likes">{`Likes: ${likes}`}</div>
            <div className="article-body" dangerouslySetInnerHTML={this.renderBody(body)}></div>
          </div>
        );
      }
      default:
        return;
    }
  }

  render() {
    return (
      <section className="article">
        { this.renderArticle() }
      </section>
    );
  }
}

const mapStateToProps = ({ articles }) => {
  const { activeArticle } = articles;
  return {
    article: activeArticle.article,
    error: activeArticle.error,
    loading: activeArticle.loading,
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
