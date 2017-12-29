import React from 'react';
import './article-list.scss';

export default (props) => {
  const { articles, error, loading } = props;
  const renderArticles = articles && (
    <div className="articles-list">
      {
        articles.map((article,i) => {
          return (
            <div className={`article-${i + 1}`} key={Math.random()}>
              <h2>
                <a href={`/article/${article.title}`}>{article.title}</a>
              </h2>
              <p>{article.date}</p>
              <p>{article.author}</p>
              <div dangerouslySetInnerHTML={{__html: article.body}}></div>
            </div>
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
