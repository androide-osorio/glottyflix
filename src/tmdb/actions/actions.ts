import { curry } from 'ramda'
import { TMDBActionTypes } from './actionTypes';
import { Action } from 'redux';


const createAction = curry(
  <S, T>(type: S, payload: T) => ({ type, ...(payload || {}) } as Action)
)

// ---------------------------------------------

export const fetchConfig = createAction(TMDBActionTypes.FETCH_CONFIG)
export const fetchConfigSuccess = createAction(TMDBActionTypes.FETCH_CONFIG_SUCCESS)
export const fetchConfigFail = createAction(TMDBActionTypes.FETCH_CONFIG_FAIL)
