const newsLoaded = (freshNews) => {
  return {
    type: 'NEWS_LOADED',
    payload: freshNews
  };
};

export {
  newsLoaded
};