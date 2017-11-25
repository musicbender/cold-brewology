import { PAGE_LOADED } from '../constants';

const initialState = {
  pageLoaded: false,
}

export default function subApp(state = initialState, action) {
  switch (action.type) {
    case PAGE_LOADED:
      return { ...state, pageLoaded: true, };

    default:
      return state;
  }
}
