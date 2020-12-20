/* eslint-disable import/named */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NewsListItem from '../news-list-item';

import { withNewsService } from '../hoc';
import { newsLoaded } from '../../actions';
import { compose } from '../../utils';
import './news-list.css';

class NewsList extends Component {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { newsService, newsLoaded } = this.props;
    newsService.getNews()
      .then((data) => {
        newsLoaded(data);
      });
  }

  render() {
    const { news } = this.props;
    return (
      <ul>
        {
          Array.isArray(news) ? news.map((newsItem) => (
            <li key={newsItem.id}>
              <NewsListItem newsItem={newsItem} />
            </li>
          )) : ('Новостей нет')
        }
      </ul>
    );
  }
}

const mapStateToProps = ({ news }) => (news);

const mapDispatchToProps = { newsLoaded };

export default compose(
  withNewsService(),
  connect(mapStateToProps, mapDispatchToProps),
)(NewsList);
