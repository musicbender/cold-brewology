import React from 'react';
import { Link } from 'react-router-dom';
import MeasureLines from '../measure-lines';
import { formatDate } from '../../util/date';
import { stripHTML, formatTitle } from '../../util/util';
import { articleConfig as config } from '../../constants/config';
import './article-list.scss';

export default (props) => {
  const { articles, error, loading } = props;

  const getPreview = (body) => {
    const { previewMax } = config;
    const preview = stripHTML(body);

    return `${preview.length > previewMax ? preview.substring(0, previewMax) : preview}...`;
  }

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
          articles.map((article,i) => {
            const { title, date, author, body, geekLevel } = article;
            return (
              <Link to={`/article/${title}`} className={`article-${i + 1}`} key={Math.random()}>
                <h3 className="title">
                  {formatTitle(title)} / <span className="author">{author}</span>
                </h3>
                <div className="info-container">
                  <p className="date">{formatDate(date)}</p>
                  <p className="geek-level">Geek Level: <span>{geekLevel}</span></p>
                </div>
                <div className="image"></div>
                <div className="preview">{getPreview(body)}</div>
              </Link>
            );
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
