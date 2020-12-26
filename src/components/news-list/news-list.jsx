/* eslint-disable import/named */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import NewsListItem from '../news-list-item';

import { withNewsService } from '../hoc';
import { ourNewsLoaded, worldNewsLoaded } from '../../actions';
import { compose } from '../../utils/compose';
import { thenable } from '../../utils/thenable';
import './news-list.css';

class NewsList extends Component {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const {
      // eslint-disable-next-line no-shadow
      newsService, ourNewsLoaded, worldNewsLoaded, type,
    } = this.props;

    const source = newsService.getNews(type);

    if (type === 'world') {
      source.then((data) => {
        worldNewsLoaded(data);
      });
    } else if (type === 'our') {
      source.then((data) => {
        ourNewsLoaded(data);
      });
    }
  }

  render() {
    const { news, type } = this.props;
    return (
      <Grid container spacing={3}>
        {
          Array.isArray(news[type]) ? news[type].map((newsItem) => (
            <Grid item xs={6} sm={3} key={newsItem.id}>
              <NewsListItem newsItem={newsItem} type={type} />
            </Grid>
          )) : ('Новостей нет')
        }
      </Grid>
    );
  }
}

const mapStateToProps = ({ news }) => (news);

const mapDispatchToProps = { ourNewsLoaded, worldNewsLoaded };

export default compose(
  withNewsService(),
  connect(mapStateToProps, mapDispatchToProps),
)(NewsList);
