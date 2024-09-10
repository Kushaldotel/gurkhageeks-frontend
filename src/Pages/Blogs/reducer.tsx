import { RootState } from './types';
import * as actions from './actions';

const initialState: RootState = {
  blogs: [],
  categories: [],
  loading: true,
  currentLayout: 'horizontal',
  currentCategory: null,
};

export function rootReducer(state = initialState, action: any): RootState {
  switch (action.type) {
    case actions.FETCH_BLOGS:
    case actions.FETCH_CATEGORIES:
      return { ...state, loading: true };
    case actions.FETCH_BLOGS_SUCCESS:
      return { ...state, blogs: action.payload, loading: false };
    case actions.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload, loading: false };
    case actions.SET_CURRENT_CATEGORY:
      return { ...state, currentCategory: action.payload };
    case actions.SET_CURRENT_LAYOUT:
      return { ...state, currentLayout: action.payload };
    default:
      return state;
  }
}