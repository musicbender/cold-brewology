import React from 'react';

export default (props) => {
  const { articles, error, loading } = props;
  const renderArticles = articles && (
    <div className="articles-list">
      {
        articles.map((article,i) => {
          return (
            <div className={`article-container-${i + 1}`} key={Math.random()}>
              <h2>{article.title}</h2>
              <p>{article.date}</p>
              <p>{article.body}</p>
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
