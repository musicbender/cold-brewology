import React from 'react';
import ArticleListItem from '../article-list-item';
import MeasureLines from '../measure-lines';
import './article-list.scss';

export default (props) => {
  const { articles, error, loading } = props;

  const renderArticleList = () => {
    switch(true) {
      case loading: {
        return (
          <p>Loading...</p>
        );
      }
      case error !== null: {
        return (
          <p>{error}</p>
        );
      }
      case articles !== null: {
        return (
          articles.map((article, i) => {
            const { title, date, author, body, geekLevel } = article;
            return (
              <ArticleListItem
                index={i}
                title={title}
                date={date}
                author={author}
                body={body}
                geekLevel={geekLevel}
              />
            )
          })
        );
      }
      default: {
        return;
      }
    }
  }

  const articleList = (
    <div className="articles-list">
     {renderArticleList()}
    </div>
  );

  return (
     <section className="articles-list-section">
       {articleList}
       <MeasureLines />
     </section>
  );
}
