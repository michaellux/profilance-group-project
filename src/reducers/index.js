import { combineReducers } from 'redux';

let appState = {
  logInStatus: {
    isLoggedIn: false
  }
}

const app = (state = appState, action) => {
  console.log(action);
  switch (action.type) {
    case 'USER_LOG_IN':
      return {
        logInStatus: { isLoggedIn: true }
      };
    case 'USER_LOG_OUT':
      return {
        logInStatus: { isLoggedIn: false }
      };
    default:
      return state;
  }
}

const newsState = {
  news: []
};

const news = (state = newsState, action) => {
  switch (action.type) {
    case 'NEWS_LOADED':
      return {
        news: action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({
  app,
  news,
});