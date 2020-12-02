const newsLoaded = (freshNews) => ({
  type: 'NEWS_LOADED',
  payload: freshNews,
});

const userLogIn = () => ({
  type: 'USER_LOG_IN',
  payload: true,
});

const userLogOut = () => ({
  type: 'USER_LOG_OUT',
  payload: false,
});

export {
  newsLoaded,
  userLogIn,
  userLogOut,
};
