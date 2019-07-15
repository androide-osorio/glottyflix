import { Reducer } from 'redux';
import { TMDBActionTypes } from '../actions/actionTypes';

const initialState = {
  tvShows: [],
  error: null
}

export const tvShowsReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case TMDBActionTypes.DISCOVER_SUCCESS: {
      const { error, ...restState } = state
      return { ...restState, tvShows: action.payload }
    }
    case TMDBActionTypes.DISCOVER_FAIL: {
      return { ...state, error: action.payload }
    }
    default:
      return state;
  }
}
