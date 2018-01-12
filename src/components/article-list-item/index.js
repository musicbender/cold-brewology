import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../util/date';
import { stripHTML, formatTitle } from '../../util/util';
import { articleConfig as config } from '../../constants/config';
import './article-list-item.scss';

export default (props) => {
  const { index: i, title, date, author, body, geekLevel } = props;

  const getPreview = body => {
    const { previewMax } = config;
    const preview = stripHTML(body);
    return `${preview.length > previewMax ? preview.substring(0, previewMax) : preview}...`;
  }

  return (
      <Link to={`/article/${title}`} className={`article-${i + 1}`} key={Math.random()}>
        <h3 className="title">
          {formatTitle(title)} / <span className="author">{author}</span>
        </h3>
        <div className="info-container">
          <p className="geek-level">Geek Level: <span>{geekLevel}</span></p>
          <p className="date">{formatDate(date)}</p>
        </div>
        <div className="image"></div>
        <div className="preview">{getPreview(body)}</div>
      </Link>
  );
}
