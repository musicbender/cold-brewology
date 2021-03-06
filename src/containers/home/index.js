import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../../components/main-header';
import HomeCTABar from '../../components/home-cta-bar';
import ArticleList from '../../components/article-list';
import CoffeeFill from '../../components/coffee-fill';
import { fetchArticles, fetchArticlesSuccess, fetchArticlesFailure } from '../../actions/articles';
import './home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArticles(0);
  }

  render() {
    const { articles, error, loading } = this.props;
    return (
      <article className="home">
        <CoffeeFill /> 
        <Header />
        <HomeCTABar />
        <ArticleList
          articles={articles}
          error={error}
          loading={loading}
        />
      </article>
    );
  }
}

const mapStateToProps = ({ articles }) => {
  const { articlesList } = articles;
  return {
    articles: articlesList.articles,
    error: articlesList.error,
    loading: articlesList.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: page => {
      dispatch(fetchArticles(page))
        .then(result => {
          const { payload } = result;
          if (payload && payload.status !== 200) {
            dispatch(fetchArticlesFailure(payload.data.message));
          } else {
            dispatch(fetchArticlesSuccess(payload.data.data));
          }
        })
        .catch(err => {
          dispatch(fetchArticlesFailure(err));
        })
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
