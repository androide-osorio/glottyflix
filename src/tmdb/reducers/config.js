import actionTypes from '../actions/actionTypes';

const initialState = {}

export const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CONFIG_SUCCESS: {
      return { ...state, ...action.payload }
    }
    case actionTypes.FETCH_CONFIG_FAIL: {
      return { ...state, error: action.payload }
    }
    default:
      return state;
  }
}
