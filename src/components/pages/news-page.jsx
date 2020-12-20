/* eslint-disable react/prop-types */
import React from 'react';
import './pages.css';
import NewsList from '../news-list';

// eslint-disable-next-line no-unused-vars
const NewsPage = () => (
  <>
    <h1 className="title main__news-title">Новости</h1>
    <NewsList />
  </>
);

export default NewsPage;
