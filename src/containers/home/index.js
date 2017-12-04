import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../../components/main-header';
import HomeCTABar from '../../components/home-cta-bar';
import ArticleList from '../../components/article-list';
import Footer from '../../components/footer';
import axios from 'axios';
import { fetchArticles, fetchArticlesSuccess, fetchArticlesFailure } from '../../actions/articles';
import './home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { articles, error, loading } = this.props;
    if (this.props.articles) {
      console.log(this.props.articles[0].author);
    }

    return (
      <div className="home">
        <Header />
        <HomeCTABar />
        <ArticleList 
          articles={articles}
          error={error}
          loading={loading}
        />
      </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: () => {
      dispatch(fetchArticles())
        .then((result) => {
          const { payload } = result;
          if (payload && payload.status !== 200) {
            dispatch(fetchArticlesFailure(payload.data.message));
          } else {
            dispatch(fetchArticlesSuccess(payload.data.data));
          }
        })
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
