import actionTypes from '../actions/actionTypes';

const initialState = {
  items: [],
  error: null
}

export const tvShowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISCOVER_SUCCESS: {
      const { error, ...restState } = state
      return { ...restState, items: action.payload }
    }
    case actionTypes.DISCOVER_FAIL: {
      return { ...state, error: action.payload }
    }
    default:
      return state;
  }
}
