const newsLoaded = (freshNews) => {
  return {
    type: 'NEWS_LOADED',
    payload: freshNews
  };
};

const userLogIn = () => {
  return {
    type: 'USER_LOG_IN',
    payload: true
  }
}

const userLogOut = () => {
  return {
    type: 'USER_LOG_OUT',
    payload: false
  }
}

export {
  newsLoaded,
  userLogIn,
  userLogOut
};