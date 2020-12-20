import React, { Fragment } from 'react';
import './news-list-item.css';

// eslint-disable-next-line react/prop-types
const NewsListItem = ({ newsItem }) => {
  // eslint-disable-next-line react/prop-types
  const { title } = newsItem;
  return (
    <>
      <span>{title}</span>
    </>
  );
};

export default NewsListItem;
