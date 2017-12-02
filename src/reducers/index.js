import { combineReducers } from 'redux';
import nav from './reducer_nav';
import articles from './reducer_articles';

const rootReducer = combineReducers({
  nav,
  articles,
});

export default rootReducer;
