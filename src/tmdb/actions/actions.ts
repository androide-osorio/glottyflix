import { TMDBActionTypes } from './actionTypes';
import { createAction } from '../../store/actions'

// ---------------------------------------------

export const fetchConfig = createAction(TMDBActionTypes.FETCH_CONFIG)
export const fetchConfigSuccess = createAction(TMDBActionTypes.FETCH_CONFIG_SUCCESS)
export const fetchConfigFail = createAction(TMDBActionTypes.FETCH_CONFIG_FAIL)
