import createAction from '../../common/store/createAction'

export const actionTypes = {
  FETCH_CONFIG: 'tmdb/config/fetch',
  FETCH_CONFIG_SUCCESS: 'tmdb/config/fetch/success',
  FETCH_CONFIG_FAIL: 'tmdb/config/fetch/fail',
}

// ---------------------------------------------
// get config from TMDB
export const fetchConfig        = createAction(actionTypes.FETCH_CONFIG)
export const fetchConfigSuccess = createAction(actionTypes.FETCH_CONFIG_SUCCESS)
export const fetchConfigFail    = createAction(actionTypes.FETCH_CONFIG_FAIL)
