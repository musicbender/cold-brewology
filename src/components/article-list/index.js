import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../util/date';
import { articleConfig as config } from '../../constants/config';
import './article-list.scss';

export default (props) => {
  const { articles, error, loading } = props;

  const stripHTML = html => {
    return html.replace(/<(?:.|\n)*?>/gm, '');
  }

  const getPreview = (body) => {
    const { previewMax } = config;
    const preview = stripHTML(body);

    return {__html: `${preview.length > previewMax ? preview.substring(0, previewMax) : preview}...`};
  }

  const renderArticles = articles && (
    <div className="articles-list">
      {
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
      }
    </div>
  );

  return (
     <section className="articles-list-section">
       { loading && <p>Loading...</p> }
       { renderArticles }
     </section>
  );
}
