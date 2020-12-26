const ourNewsLoaded = (freshNews) => ({
  type: 'OUR_NEWS_LOADED',
  payload: freshNews,
});

const worldNewsLoaded = (freshNews) => ({
  type: 'WORLD_NEWS_LOADED',
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
  ourNewsLoaded,
  worldNewsLoaded,
  userLogIn,
  userLogOut,
};
