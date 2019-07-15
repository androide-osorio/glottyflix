import { TMDBActionTypes } from './actionTypes';
import { createAction } from '../../store/actions'

// ---------------------------------------------
// get config from TMDB
export const fetchConfig = createAction(TMDBActionTypes.FETCH_CONFIG)
export const fetchConfigSuccess = createAction(TMDBActionTypes.FETCH_CONFIG_SUCCESS)
export const fetchConfigFail = createAction(TMDBActionTypes.FETCH_CONFIG_FAIL)

// actions for calling discover endpoint
export const discover = createAction(TMDBActionTypes.DISCOVER)
export const dicoverSuccess = createAction(TMDBActionTypes.DISCOVER_SUCCESS)
export const discoverFail = createAction(TMDBActionTypes.DISCOVER_FAIL)
