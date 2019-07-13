import { curry } from 'ramda'
import { Action } from 'redux'
import { TMDBActionTypes } from './actionTypes';


const createAction = curry(
  <S, T>(type: S, payload?: T) => ({ type, ...payload })
)

// ---------------------------------------------

export const fetchConfig = createAction(TMDBActionTypes.FETCH_CONFIG)
export const fetchConfigSuccess = createAction(TMDBActionTypes.FETCH_CONFIG_SUCCESS)
export const fetchConfigFail = createAction(TMDBActionTypes.FETCH_CONFIG_FAIL)
