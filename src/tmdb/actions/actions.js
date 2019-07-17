import actionTypes from './actionTypes';
import { createAction } from '../../store/actions'

// ---------------------------------------------
// get config from TMDB
export const fetchConfig        = createAction(actionTypes.FETCH_CONFIG)
export const fetchConfigSuccess = createAction(actionTypes.FETCH_CONFIG_SUCCESS)
export const fetchConfigFail    = createAction(actionTypes.FETCH_CONFIG_FAIL)

// actions for calling discover endpoint
export const discover        = createAction(actionTypes.DISCOVER)
export const discoverSuccess = createAction(actionTypes.DISCOVER_SUCCESS)
export const discoverFail    = createAction(actionTypes.DISCOVER_FAIL)
