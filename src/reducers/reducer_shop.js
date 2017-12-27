import {
	FETCH_SHOP, FETCH_SHOP_SUCCESS, FETCH_SHOP_FAILURE, RESET_SHOP,
} from '../constants';

import initialState from '../constants/initial-state';

export default function shop(state = initialState.shop, action) {
  switch(action.type) {
    case FETCH_SHOP: {
      return { ...state, shopList: { items: null, error: null, loading: true }};
    }
    case FETCH_SHOP_SUCCESS: {
			const items = action.payload.result.ItemLookupResponse.Items.Item;
      return { ...state, shopList: { items, error: null, loading: false }};
    }
    case FETCH_SHOP_FAILURE: {
      return { ...state, shopList: { items: null, error: action.payload, loading: false }}
    }
		case RESET_SHOP: {
			return { ...state, shopList: { items: null, error: null, loading: false }};
		}
    default: {
      return state;
    }
  }
}
