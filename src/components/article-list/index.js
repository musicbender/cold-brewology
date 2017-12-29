import React from 'react';
import { Link } from 'react-router-dom';
import './article-list.scss';

export default (props) => {
  const { articles, error, loading } = props;
  const renderArticles = articles && (
    <div className="articles-list">
      {
        articles.map((article,i) => {
          return (
            <Link to={`/article/${article.title}`} className={`article-${i + 1}`} key={Math.random()}>
              <h3>{article.title}</h3>
              <p>{article.date}</p>
              <p>{article.author}</p>
              <div dangerouslySetInnerHTML={{__html: article.body}}></div>
            </Link>
          )
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
