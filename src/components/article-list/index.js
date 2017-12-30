import React from 'react';
import { Link } from 'react-router-dom';
import MeasureLines from '../measure-lines';
import { formatDate } from '../../util/date';
import { stripHTML } from '../../util/util';
import { articleConfig as config } from '../../constants/config';
import './article-list.scss';

export default (props) => {
  const { articles, error, loading } = props;

  const getPreview = (body) => {
    const { previewMax } = config;
    const preview = stripHTML(body);

    return {__html: `${preview.length > previewMax ? preview.substring(0, previewMax) : preview}...`};
  }

  const renderArticleList = () => {
    switch(true) {
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
      case articles !== null: {
        return (
          articles.map((article,i) => {
            return (
              <Link to={`/article/${article.title}`} className={`article-${i + 1}`} key={Math.random()}>
                <h3>{article.title}</h3>
                <p>{formatDate(article.date)}</p>
                <p>{article.author}</p>
                <div dangerouslySetInnerHTML={getPreview(article.body)}></div>
              </Link>
            );
          })
        );
      }
      default: {
        console.log('default');
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
