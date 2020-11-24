import React from 'react';
import { NewsServiceConsumer } from '../news-service-context'

const withNewsService = () => (Wrapped) => {

  return (props) => {
    return (
      <NewsServiceConsumer>
        {
          (newsService) => {
            <Wrapped {...props} newsService={newsService}/>
          }
        }
      </NewsServiceConsumer>
    );
  }
};

export default withNewsService;