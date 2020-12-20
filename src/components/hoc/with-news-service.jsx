/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { NewsServiceConsumer } from '../news-service-context';

const withNewsService = () => (Wrapped) => (props) => (
  <NewsServiceConsumer>
    {
          (newsService) => (<Wrapped {...props} newsService={newsService} />)
    }
  </NewsServiceConsumer>
);

export default withNewsService;
