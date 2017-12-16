import { API } from '../constants/config';
import {
	FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE, RESET_ARTICLES,
	FETCH_ARTICLE, FETCH_ARTICLE_SUCCESS,  FETCH_ARTICLE_FAILURE, RESET_ACTIVE_ARTICLE,
	CREATE_ARTICLE, CREATE_ARTICLE_SUCCESS, CREATE_ARTICLE_FAILURE, RESET_NEW_ARTICLE,
	DELETE_ARTICLE, DELETE_ARTICLE_SUCCESS, DELETE_ARTICLE_FAILURE, RESET_DELETED_ARTICLE,
  VALIDATE_ARTICLE_FIELDS,VALIDATE_ARTICLE_FIELDS_SUCCESS, VALIDATE_ARTICLE_FIELDS_FAILURE, RESET_ARTICLE_FIELDS
} from '../constants';

export function fetchArticles(page) {
	const request = API.get(`/get-articles/${page}`);
  return {
    type: FETCH_ARTICLES,
    payload: request,
  }
}

export function fetchArticlesSuccess(data) {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    payload: data,
  }
}

export function fetchArticlesFailure(error) {
  return {
    type: FETCH_ARTICLES_FAILURE,
    payload: error,
  }
}
