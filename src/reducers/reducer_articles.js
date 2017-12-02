import {
	FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE, RESET_ARTICLES,
	FETCH_ARTICLE, FETCH_ARTICLE_SUCCESS,  FETCH_ARTICLE_FAILURE, RESET_ACTIVE_ARTICLE,
	CREATE_ARTICLE, CREATE_ARTICLE_SUCCESS, CREATE_ARTICLE_FAILURE, RESET_NEW_ARTICLE,
	DELETE_ARTICLE, DELETE_ARTICLE_SUCCESS, DELETE_ARTICLE_FAILURE, RESET_DELETED_ARTICLE,
  VALIDATE_ARTICLE_FIELDS,VALIDATE_ARTICLE_FIELDS_SUCCESS, VALIDATE_ARTICLE_FIELDS_FAILURE, RESET_ARTICLE_FIELDS
} from '../constants';
import { articles as initialState } from '../constants/initial-state';

export default function articles(state = initialState, action) {
  switch(action) {
    case FETCH_ARTICLES: {
      return { ...state, postList: { posts: [], error: null, loading: true }};
    }
    case FETCH_ARTICLES_SUCCESS: {
      return { ...state, postList: { posts: [action.payload], error: null, loading: false }};
    }
    case FETCH_ARTICLES_FAILURE: {
      return { ...state, postList: { posts: [], error: action.payload, loading: true }}
    }
  }
}
