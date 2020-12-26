/* eslint-disable react/prop-types */
import React from 'react';
import './pages.css';
import NewsList from '../news-list';
// eslint-disable-next-line no-unused-vars
const NewsPage = () => (
  <>
    <h1 className="title main__news-title">Новости</h1>
    <div className="main__our-news-block">
      <h2 className="title main__our-news-title">Вчера и сегодня</h2>
      <NewsList type="our" />
    </div>
    <div className="main__world-news-block">
      <h2 className="title main__world-news-title">Мир</h2>
      <NewsList type="world" />
    </div>
  </>
);

export default NewsPage;
