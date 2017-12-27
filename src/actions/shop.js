import { API } from '../constants/config';
import {
	FETCH_SHOP, FETCH_SHOP_SUCCESS, FETCH_SHOP_FAILURE, RESET_SHOP,
} from '../constants';

export function fetchShop(type, page) {
	const request = API.get(`/get-shop/${type}/${page}`);
  return {
    type: FETCH_SHOP,
    payload: request,
  }
}

export function fetchShopSuccess(data) {
  return {
    type: FETCH_SHOP_SUCCESS,
    payload: data,
  }
}

export function fetchShopFailure(error) {
  return {
    type: FETCH_SHOP_FAILURE,
    payload: error,
  }
}

export function resetShop() {
	return {
		type: RESET_SHOP,
	}
}
