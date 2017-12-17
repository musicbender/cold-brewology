import { combineReducers } from 'redux';
import nav from './reducer_nav';
import articles from './reducer_articles';
import shop from './reducer_shop';

const rootReducer = combineReducers({
  nav,
  articles,
  shop,
});

export default rootReducer;
