/* eslint-disable import/named */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
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
      <Grid container spacing={3}>
        {
          Array.isArray(news) ? news.map((newsItem) => (
            <Grid item xs={6} sm={3} key={newsItem.id}>
              <NewsListItem newsItem={newsItem} />
            </Grid>
          )) : ('Новостей нет')
        }
      </Grid>
    );
  }
}

const mapStateToProps = ({ news }) => (news);

const mapDispatchToProps = { newsLoaded };

export default compose(
  withNewsService(),
  connect(mapStateToProps, mapDispatchToProps),
)(NewsList);
