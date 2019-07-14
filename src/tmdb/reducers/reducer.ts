import { Reducer } from 'redux';
import { TMDBActionTypes } from '../actions/actionTypes';

const initialState = {}

export const configReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case TMDBActionTypes.FETCH_CONFIG_SUCCESS: {
      return { ...state, ...action.payload }
    }
    default:
      return state;
  }
}
